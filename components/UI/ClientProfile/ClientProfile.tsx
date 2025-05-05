import Image from "next/image";
import React, { FC, useContext, useMemo, useState } from "react";
import UserProfile from "../Dropdown/UserProfile/UserProfile";
import { useSelector } from "react-redux";
import useUser from "@/hook/use-user";
import { BaseBackURL } from "@/constant";
import { defaultURL } from "@/constant/url";
import useAuth from "@/hook/refactor/use-auth";

const ClientProfile: FC = (): JSX.Element => {
  const { user } = useAuth();
  const [showBody, setShowBody] = useState<boolean>(false);
  const showBodyHandler = () => {
    setShowBody((prevState) => !prevState);
  };

  return (
    <div className="client-profile__section">
      <div className="client-profile__avatar">
        <Image
          alt=""
          src={
            user?.avatar_url ? `${user?.avatar_url}` : defaultURL.defaultProfile
          }
          designer-avatar__image
          width={56}
          height={56}
          onClick={showBodyHandler}
        ></Image>
      </div>
      {showBody ? <UserProfile /> : null}
    </div>
  );
};

export default ClientProfile;
