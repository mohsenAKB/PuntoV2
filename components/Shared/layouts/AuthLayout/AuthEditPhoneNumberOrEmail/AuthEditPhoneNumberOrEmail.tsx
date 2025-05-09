import useLink from "@/hook/use-link";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, JSX, useMemo } from "react";

type AuthEditPhoneNumberOrEmailProps = {
  href: string;
};

interface IForgetPasswordEnterOTPParams {
  "phone-number": string;
  email: string;
}

const AuthEditPhoneNumberOrEmail: FC<AuthEditPhoneNumberOrEmailProps> = ({
  href,
}): JSX.Element => {
  const router = useRouter();
  const { getQueryParams } = useLink();
  const params = getQueryParams<IForgetPasswordEnterOTPParams>();

  const phoneNumber = useMemo<number>(() => {
    return +(params["phone-number"] as string);
  }, [router]);

  const email = useMemo<number>(() => {
    return +(params["email"] as string);
  }, [router]);

  const editText = phoneNumber ? "ویرایش شماره" : "ویرایش ایمیل";

  return (
    <Link href={href} className="new-auth-edit">
      {editText}
    </Link>
  );
};

export default AuthEditPhoneNumberOrEmail;
