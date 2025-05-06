import { BaseBackURL } from "@/constant";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { URL } from "@/constant/url";
import axios from "axios";
import Image from "next/image";
import { SearchDesigners } from "@/@types/entity/search/search-designers";
import useRequest from "@/hook/use-request";
import { IList } from "@/@types/Response/list";
import { IExpertise } from "@/@types/entity/refactor/expertises";
import { ISkill } from "@/@types/entity/refactor/skill";
import { SearchUser } from "@/@types/entity/search/search-user";
import { API } from "@/constant/api";

interface DesignerProps {
  designer: ReactNode;
}

interface SearchResults {
  users: SearchUser[];
  skills: ISkill[];
  expertise: IExpertise[];
}

const Designers: React.FC<DesignerProps> = ({ designer }) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResults>({
    users: [],
    expertise: [],
    skills: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const router = useRouter();
  const request = useRequest<IList<SearchDesigners[]>>();
  const resultDropdownRef = useRef<HTMLDivElement>(null);

  const clickHandler = () => {
    if (
      results.users.length === 0 &&
      results.skills.length === 0 &&
      results.expertise.length === 0
    ) {
      router.push(URL.Designers);
    } else if (results.users.length) {
      const getFirstItem = results.users[0];
      const firstItemId = getFirstItem.id;
      router.push(`${URL.DesignerProfile}/${firstItemId}`);
    } else if (results.expertise.length) {
      const getFirstItem = results.expertise[0];
      const firstItemId = getFirstItem.id;
      router.push(`${URL.Designers}?expertise=${firstItemId}`);
    } else if (results.skills.length) {
      const getFirstItem = results.skills[0];
      const firstItemId = getFirstItem.id;
      router.push(`${URL.Designers}?skill=${firstItemId}`);
    }
  };
  const fetchData = async () => {
    if (query.length < 1) {
      setResults({
        users: [],
        expertise: [],
        skills: [],
      });
      return;
    }

    setLoading(true);
    try {
      const response = await request.get(API.getDesinersInfo(query));

      const searchData: SearchResults = response?.data;
      const { users, expertise, skills } = searchData;
      setResults({
        users: users || [],
        expertise: expertise || [],
        skills: skills || [],
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const dropDownContent = useMemo(() => {
    if (isFocused && query.length < 1) {
      return (
        <div className="search-dropDown">
          <p className="search-dropDown__text">لطفا حداقل 1 حرف وارد کنید</p>
        </div>
      );
    } else if (isFocused && query.length >= 1) {
      if (loading) {
        return (
          <div className="search-dropDown">
            <p className="search-dropDown__text">در حال جستجو...</p>
          </div>
        );
      } else if (
        results.users.length ||
        results.expertise.length ||
        results.skills.length
      ) {
        return (
          <div className="search-dropDown">
            {results.expertise.length > 0 && (
              <>
                <p className="search-dropDown__text">جست و جوی بر اساس تخصص</p>
                <div className="search-dropDown__result">
                  {results.expertise.map((item: IExpertise) => (
                    <Link
                      className="search-dropDown__result--item"
                      href={`/designers?expertise=${item.id}`}
                      key={item.id}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
            {results.skills.length > 0 && (
              <>
                <p className="search-dropDown__text">جست و جوی بر اساس مهارت</p>
                <div className="search-dropDown__result">
                  {results.skills.map((item: ISkill) => (
                    <Link
                      className="search-dropDown__result--item"
                      href={`/designers?skill=${item.id}`}
                      key={item.id}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
            {results.users.length > 0 && (
              <>
                <p className="search-dropDown__text">
                  جست و جوی بر اساس نام طراح
                </p>
                <div className="search-dropDown__result">
                  {results.users.map((user: SearchUser, index: number) => (
                    <Link
                      className="search-dropDown__result--item"
                      href={`/designer-profile/${user.id}`}
                      key={index}
                    >
                      {user.first_name} {user.last_name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      } else {
        return (
          <div className="search-dropDown">
            <p className="search-dropDown__text">نتیجه‌ای یافت نشد</p>
          </div>
        );
      }
    }
    return null;
  }, [isFocused, query, results, loading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clickHandler();
    //router.push(`/designers`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as React.FormEvent);
    }
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      resultDropdownRef.current &&
      !resultDropdownRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        className="intro-header__right--search-input"
        ref={resultDropdownRef}
      >
        <Image
          width={45}
          height={100}
          src="/assets/icons/search-header.svg"
          alt=""
          className="intro-header__right--search-input-icon"
        />
        <input
          type="text"
          placeholder="دنبال چه طراحی می‌گردید؟"
          className="intro-header__right--search-input-text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          // onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
        />
        <input
          type="submit"
          value="جست و جو"
          className="intro-header__right--search-input-submit"
          onClick={clickHandler}
        />
        {dropDownContent}
      </div>
      <div className="intro-header__right--tags">
        <h3 className="intro-header__right--tags-heading">
          جستجوی طراح بر اساس تخصص
        </h3>
        {designer}
      </div>
    </>
  );
};

export default Designers;
