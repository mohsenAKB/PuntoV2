import Link from "next/link";
import React, { FC } from "react";
import { footerCol, footerDataProps } from "@/constant/footer";


export interface FooterColProps {
  data: footerDataProps;
}

const FooterCol: FC<FooterColProps> = ({ data }) => {
  const { title, columnItem = [] } = data;

  const generateFooterCol = columnItem.map((item) => (
    <li key={item.anchorText} className="footer-col__item">
      <Link href={item.href}>{item.anchorText}</Link>
    </li>
  ));

  return (
    <nav className="footer-col">
      <h2 className="footer-col__heading">{title}</h2>
      <ul className="footer-col__list">{generateFooterCol}</ul>
    </nav>
  );
};

export default FooterCol;
