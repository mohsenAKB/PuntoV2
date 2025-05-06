import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { URL } from "@/constant/url";
import axios from "axios";
import { BaseBackURL } from "@/constant";
import Link from "next/link";
import Image from "next/image";
import { SearchIdeas } from "@/@types/entity/search/search-ideas";
import { IStyle } from "@/@types/entity/refactor/style";
import { IUsage } from "@/@types/entity/refactor/usage";
import { useReducedMotion } from "framer-motion";
import useRequest from "@/hook/use-request";
import { IList } from "@/@types/Response/list";
import { ISmallResidentialSpace } from "@/@types/entity/refactor/small-residential-space";
import { API } from "@/constant/api";
import { IMaterial } from "@/@types/entity/refactor/material";
import { IColor } from "@/@types/entity/refactor/colors";

const Idea = ({ idea }: any) => {
  const router = useRouter();
  const request = useRequest<IList<SearchIdeas>>();
  const clickHandler = () => {
    if (
      results.usages.length === 0 &&
      results.styles.length === 0 &&
      results.small_residential_spaces.length === 0 &&
      results.materials.length === 0 &&
      results.colors.length === 0
    ) {
      router.push(URL.Project);
    } else if (results.usages.length) {
      const getFirstItem = results.usages[0];
      const firstItemId = getFirstItem.id;
      router.push(`${URL.Project}?usage=${firstItemId}`);
    } else if (results.styles.length) {
      const getFirstItem = results.styles[0];
      const firstItemId = getFirstItem.id;
      router.push(`${URL.Project}?style=${firstItemId}`);
    } else if (results.small_residential_spaces.length) {
      const getFirstItem = results.small_residential_spaces[0];
      const firstItemId = getFirstItem.id;
      router.push(`${URL.Project}?small_residential_space=${firstItemId}`);
    } else if (results.materials.length) {
      const getFirstItem = results.materials[0];
      const firstItemId = getFirstItem.id;
      router.push(`${URL.Project}?material=${firstItemId}`);
    } else if (results.colors.length) {
      const getFirstItem = results.colors[0];
      const firstItemId = getFirstItem.id;
      router.push(`${URL.Project}?color=${firstItemId}`);
    }
  };
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchIdeas>({
    usages: [],
    styles: [],
    small_residential_spaces: [],
    materials: [],
    colors: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const resultDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (query.length >= 1) {
        setLoading(true);
        try {
          const response = await request.get(API.searcgIdea(query));
          if (response) {
            const searchData = response.data;
            const {
              usages,
              styles,
              small_residential_spaces,
              materials,
              colors,
            } = searchData;
            setResults({
              usages,
              styles,
              small_residential_spaces,
              materials,
              colors,
            });
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults({
          usages: [],
          styles: [],
          small_residential_spaces: [],
          materials: [],
          colors: [],
        });
      }
    };

    fetchData();
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
        results.usages.length ||
        results.styles.length ||
        results.small_residential_spaces.length ||
        results.materials ||
        results.colors
      ) {
        return (
          <div className="search-dropDown">
            {results.usages.length > 0 && (
              <>
                <p className="search-dropDown__text">
                  جست و جوی <span>{query}</span> در کاربری
                </p>
                <div className="search-dropDown__result">
                  {results.usages.map((item: IUsage) => (
                    <Link
                      className="search-dropDown__result--item"
                      href={`/projects?usage=${item.id}`}
                      key={item.id}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            )}

            {results.styles.length > 0 && (
              <>
                <p className="search-dropDown__text">
                  جست و جوی <span>{query}</span> در سبک
                </p>
                <div className="search-dropDown__result">
                  {results.styles.map((item: IStyle) => (
                    <Link
                      className="search-dropDown__result--item"
                      href={`/projects?style=${item.id}`}
                      key={item.id}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            )}

            {results.small_residential_spaces.length > 0 && (
              <>
                <p className="search-dropDown__text">
                  جست و جوی <span>{query}</span> در ریز فضای مسکونی
                </p>
                <div className="search-dropDown__result">
                  {results.small_residential_spaces.map(
                    (item: ISmallResidentialSpace) => (
                      <Link
                        className="search-dropDown__result--item"
                        href={`/projects?small_residential_space=${item.id}`}
                        key={item.id}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </>
            )}
            {results.materials.length > 0 && (
              <>
                <p className="search-dropDown__text">
                  جست و جوی <span>{query}</span> در متریال
                </p>
                <div className="search-dropDown__result">
                  {results.materials.map((item: IMaterial) => (
                    <Link
                      className="search-dropDown__result--item"
                      href={`/projects?material=${item.id}`}
                      key={item.id}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
            {results.colors.length > 0 && (
              <>
                <p className="search-dropDown__text">
                  جست و جوی <span>{query}</span> در رنگ
                </p>
                <div className="search-dropDown__result">
                  {results.colors.map((item: IColor) => (
                    <Link
                      className="search-dropDown__result--item"
                      href={`/projects?color=${item.id}`}
                      key={item.id}
                    >
                      {item.name}
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
    router.push(`/projects`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (resultDropdownRef.current && !resultDropdownRef.current.contains(event.target as Node)) {
      setIsFocused(false)
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
      <div className="intro-header__right--search-input" ref={resultDropdownRef}>
        <Image
          width={45}
          height={100}
          src="/assets/icons/search-header.svg"
          alt=""
          className="intro-header__right--search-input-icon"
        />
        <input
          type="text"
          placeholder="دنبال چه ایده‌ای می‌گردید؟"
          className="intro-header__right--search-input-text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
        // onBlur={handleBlur}
        />
        {dropDownContent}
        <input
          type="submit"
          value="جست و جو"
          className="intro-header__right--search-input-submit"
          onClick={clickHandler}
        />
      </div>

      <div className="intro-header__right--tags">
        <h3 className="intro-header__right--tags-heading">
          جستجوی ایده‌ها بر اساس کاربری:
        </h3>
        {idea}
      </div>
    </>
  );
};

export default Idea;
