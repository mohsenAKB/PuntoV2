"use client";
import React, { FC, JSX } from "react";
import IntroHeader from "./IntroHeader/IntroHeader";
import useConfigs from "@/hook/use-configs";
import Carousel from "../UI/Carousel/Carousel";
import { EntityType } from "@/@types/entities/carousel";

export interface IHomeProps {}

const Home: FC<IHomeProps> = (): JSX.Element => {
  const { small_residential_spaces, usages, styles, materials } = useConfigs();

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
      </div>
    </main>
  );
};

export default Home;
