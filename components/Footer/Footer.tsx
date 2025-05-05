import Image from "next/image";
import React, { useMemo } from "react";
import FooterCol from "./FooterCol/FooterCol";
import { footerData, footerDescription } from "@/constant/footer";
import Logo from "../UI/Logo/Logo";
import { socialMediaURL } from "@/constant/url";
import Link from "next/link";

const Footer = () => {
  const generateFooterCol = useMemo(() => {
    return footerData.map((col) => <FooterCol data={col} key={col.title} />);
  }, [footerData]);

  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer__right">
          <div className="footer__details">
            <Logo />
            <div className="footer__details__social">
              <Link
                href={socialMediaURL.instagramUrl}
                target="_blank"
              >
                <Image
                  src={socialMediaURL.instagram}
                  width={20}
                  height={20}
                  alt="instagram"
                />
              </Link>
               <Link href={socialMediaURL.linkedinUrl} target="_blank">
                <Image
                  src={socialMediaURL.linkedin}
                  width={20}
                  height={20}
                  alt="facebook"
                />
              </Link>
  
            </div>
          </div>
          <p className="footer__description">{footerDescription}</p>
        </div>
        <div className="footer__left">{generateFooterCol}</div>
      </div>
      <hr />
      <p className="footer__copyright">
        تمام حقوق این وب‌سایت برای شرکت پونتو محفوظ است.
      </p>
    </footer>
  );
};

export default Footer;
