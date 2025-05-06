import React, { FC } from "react";

export interface IntroductionProps { }

const Introduction: FC<IntroductionProps> = (): JSX.Element => {
  return (
    <>
      <h1 className="intro-header__right--heading">
        پونتو، نقطه اتصال
        <br /> شما به طراح
      </h1>
      <div className="intro-header__right--description">
        با جستجوی ایده متناسب با سلیقه خود، بهترین متخصص را برای انجام آن پیدا
        کنید.
      </div>
    </>
  );
};

export default Introduction;
