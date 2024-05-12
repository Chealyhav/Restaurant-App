"use client";
import Image from "next/image";
import { useState } from "react";
import { ProfilePopup } from "./profile-popup";
import { HeaderProps, IRespone } from "@/api/interface";
import { getStrapiMedia } from "@/api/api-helpers";

export const Profiles: React.FC<{ restaurant: IRespone<HeaderProps> }> = ({
  restaurant,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const media = getStrapiMedia(
    restaurant?.data?.attributes?.logo?.data?.attributes?.url,
  );

  return (
    <>
      <div  onClick={openModal}>
        <Image
          src={media || ""}
          alt={restaurant?.data?.attributes.name || "Restaurant"}
          width={40}
          height={40}
          className="size-10 object-cover"
        />
      </div>
      <ProfilePopup
        isOpen={isOpen}
        onClose={closeModal}
        restaurant={restaurant}
      />
    </>
  );
};
