import DashboardTabPanel from "@/components/UI/DashboardTabPanel/DashboardTabPanel";
import Tags from "@/components/UI/Tags/Tags";
import Designers from "./Designers/Designers";
import React, { FC, JSX, useMemo } from "react";
import Idea from "./Idea/Idea";
import { useRouter } from "next/navigation";
import { Itag } from "@/@types/entities/tag";

export interface SearchProps {}

const Search: FC<SearchProps> = (): JSX.Element => {
  const router = useRouter();
  const ideaList: Itag[] = [
    { name: "مسکونی", id: 12 },
    { name: "تجاری", id: 13 },
    { name: "اداری", id: 14 },
    { name: "رستوران", id: 20 },
    { name: "شهر/شهرک سازی", id: 23 },
  ];
  const designerList: Itag[] = [
    { name: "طراحی معماری", id: 1 },
    { name: "طراحی داخلی و دکوراسیون", id: 2 },
    { name: "طراحی نما", id: 3 },
    { name: "طراحی فضای سبز", id: 7 },
    { name: "شهرسازی", id: 9 },
  ];
  const clickHandlerIdeaList = (id: number) => {
    router.push(`/projects?usage=${id}`);
  };
  const clickHandlerDesignerList = (id: number) => {
    router.push(`/designers?expertise=${id}`);
  };

  const ideaMemo = useMemo(() => {
    return ideaList.map((tag) => (
      <Tags
        key={tag.name}
        tag={tag}
        blackType={true}
        onClick={() => clickHandlerIdeaList(tag.id)}
      />
    ));
  }, [ideaList]);

  const designerMemo = useMemo(() => {
    return designerList.map((tag) => (
      <Tags
        key={tag.id}
        tag={tag}
        blackType={true}
        onClick={() => clickHandlerDesignerList(tag.id)}
      />
    ));
  }, [designerList]);

  const tabItems = [
    { label: "جستجوی ایده", children: <Idea idea={ideaMemo} /> },
    {
      label: "جستجوی طراح ",
      children: <Designers designer={designerMemo} />,
    },
  ];

  return (
    <>
      <div className="intro-header__right--search">
        <div className="intro-header__right--search-tabs">
          <DashboardTabPanel
            items={tabItems}
            className="intro-header__right--search-tab"
            activeTabLabel="جستجوی ایده"
          />
        </div>
      </div>
    </>
  );
};

export default Search;
