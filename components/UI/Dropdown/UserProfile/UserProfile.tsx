import React, { FC, JSX } from "react";
import { useRouter } from "next/navigation";
import { URL } from "@/constant/url";
import useAuth from "@/hook/use-auth";
import BaseDropDown from "../../Base/BaseDropdown/BaseDropdown";

const UserProfile: FC = (): JSX.Element => {
  const router = useRouter();
  const { logoutUser } = useAuth();

  return (
    <>
      <BaseDropDown
        items={[
          {
            children: "پروفایل",
            value: "پروفایل",
            onClick: () => {
              router.push(URL.Profile);
            },
          },
          {
            children: "خروج",
            value: "خروج",
            onClick: () => {
              logoutUser();
            },
          },
        ]}
        open={true}
        className="user-profile"
      ></BaseDropDown>
    </>
  );
};

export default UserProfile;
