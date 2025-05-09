import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, JSX } from "react";

type AuthEditPhoneNumberOrEmailProps = {
  href: string;
};

const AuthEditPhoneNumberOrEmail: FC<AuthEditPhoneNumberOrEmailProps> = ({
  href,
}): JSX.Element => {
  const router = useRouter();
  const phoneNumber = router.query["phone-number"];
  const email = router.query["email"];

  const editText = phoneNumber ? "ویرایش شماره" : "ویرایش ایمیل";

  return (
    <Link href={href} className="new-auth-edit">
      {editText}
    </Link>
  );
};

export default AuthEditPhoneNumberOrEmail;
