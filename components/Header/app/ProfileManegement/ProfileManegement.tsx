import ClientProfile from "@/components/UI/ClientProfile/ClientProfile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileManegement = () => {
  return (
    <div className="profile-manegement">
      <Link href="/dashboard/favorite/" className="profile-manegement__link">
        <Image
          className="profile-manegement__icon"
          src="/assets/icons/heart.svg"
          width={24}
          height={24}
          alt="faverite"
        ></Image>
      </Link>
      <Link
        href="/dashboard/notifications/"
        className="profile-manegement__link"
      >
        <Image
          className="profile-manegement__icon"
          src="/assets/icons/notification-bing.svg"
          width={24}
          height={24}
          alt="notification"
        ></Image>
      </Link>
      <ClientProfile />
    </div>
  );
};

export default ProfileManegement;
