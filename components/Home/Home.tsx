"use client";
import React, { FC, JSX, useMemo } from "react";
import IntroHeader from "./IntroHeader/IntroHeader";
import useConfigs from "@/hook/use-configs";
import Carousel from "../UI/Carousel/Carousel";
import { EntityType } from "@/@types/entities/carousel";
import FeaturedCard from "../UI/FeaturedCard/FeaturedCard";
import { detailsBlog } from "@/@types/entities/blog/details-blog";
import { IProject } from "@/@types/entities/projects/project";
import TopCard from "../UI/Cards/TopCard/TopCard";
import IdeasCard from "../UI/Cards/IdeasCard/IdeasCard";
import SwiperWrapper from "../UI/SwiperWrapper/SwiperWrapper";

export interface IHomeProps {
  commonBlogs: detailsBlog[] | undefined;
  lastProject: IProject[] | undefined;
}

const Home: FC<IHomeProps> = ({ commonBlogs, lastProject }): JSX.Element => {
  const { small_residential_spaces, usages, styles, materials } = useConfigs();

  const checkCommonBlogs: JSX.Element | undefined = useMemo(() => {
    if (commonBlogs) {
      return (
        <section className="featured-card-section">
          <FeaturedCard
            title=" بلاگ پربازدید"
            viewAllLink="/blog"
            blogDetail={commonBlogs[0]}
          />
          <FeaturedCard
            title="بلاگ محبوب"
            viewAllLink="/blog"
            blogDetail={commonBlogs[1]}
          />
        </section>
      );
    }
  }, [commonBlogs]);

  const checkLastProject: JSX.Element | undefined = useMemo(() => {

    if (lastProject) {
          return (
            <section>
              <TopCard
                heading=" آخرین پروژه ها  "
                link="/projects"
                tooltipDescription="آخرین پروژه‌های آپلود شده در سایت را ببینید."
                anchorText="مشاهده همه"
              />
              <SwiperWrapper items={lastProject}>
                {(item) => <IdeasCard project={item} />}
              </SwiperWrapper>
            </section>
          );
    }

  }, [
    lastProject,
  ]);
  return (
    <main>
      <IntroHeader />
      <div className="home_section">
        <div className="home__usage-slider">
          <Carousel
            heading="جست‌و‌جوی ایده بر اساس کاربری"
            link="/projects"
            tooltipDescription="پروژه‌ها را بر اساس نوع کاربری فیلتر کنید."
            anchorText="مشاهده همه"
            entity={EntityType.usage}
            data={usages}
            onClick={() => {}}
          />
        </div>
        {checkCommonBlogs}
        {checkLastProject}
      </div>
    </main>
  );
};

export default Home;
