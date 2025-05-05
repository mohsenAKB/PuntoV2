export interface footerCol {
  anchorText: string;
  href: string;
}
export interface footerDataProps {
  title: string;
  columnItem: footerCol[];
}

export const footerData: footerDataProps[] = [
  {
    title: "خدمات",
    columnItem: [
      { anchorText: "ایده ها ", href: "/projects" },
      { anchorText: "طراحان ", href: "/designers" },
      { anchorText: "مجله", href: "/blog" },
    ],
  },
];

export const footerDescription =
  " پونتو، پلتفرم بازار کار آنلاین معماری و فریلنسرهای صنعت ساختمان";
