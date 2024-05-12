"use client";
import { API_URL } from "@/api/urls";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { HeaderProps, IRespone } from "@/api/interface";
import cl from "classnames";
import {
  FaceBookIcon,
  MapIcon,
  TelegramIcon,
  TiktokIcon,
} from "../socials-Icon";
import { getStrapiMedia } from "@/api/api-helpers";

export const ProfilePopup: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  restaurant: IRespone<HeaderProps>;
}> = ({
  isOpen,
  onClose,
  restaurant: {
    data: {
      attributes: {
        banner,
        name,
        logo,
        description,
        facebook_link,
        map_url,
        phone_number,
        tiktok_link,
        telegram_link,
      },
    },
  },
}) => {
  const mediaBanner = getStrapiMedia(banner?.data?.attributes?.url);
  const mediaLogo = getStrapiMedia(logo?.data?.attributes?.url);
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 " onClose={onClose}>
        <div className="flex min-h-screen items-center justify-center max-sm:px-4 ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 z-20 bg-gray-100/60 opacity-100 backdrop-blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="scrollbar-thumb-rounded z-30  mx-auto  h-full max-h-[85vh] w-full max-w-md scale-100  transform overflow-y-auto rounded-lg border bg-white text-left align-middle opacity-100 shadow-lg transition-all scrollbar-thin scrollbar-thumb-zinc-200">
              <div className="">
                <div className={cl("",{"aspect-h-2 aspect-w-7":banner.data })}>
                  <Image
                    src={mediaBanner || ""}
                    alt={banner?.data?.attributes?.name as string || "product name"}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                  <div className="relative flex justify-end p-4">
                    <button
                      type="button"
                      className="rounded-md border-2 border-gray-300 bg-red-600"
                      onClick={onClose}
                    >
                      <XMarkIcon
                        width={24}
                        hanging={24}
                        className="font-bold text-white"
                      />
                    </button>
                  </div>
                </div>
                {logo.data && (
                  <div className="mx-auto -mt-16 w-32">
                    <div className="aspect-h-1 aspect-w-1 relative">
                      <Image
                        src={mediaLogo || ""}
                        alt={logo?.data?.attributes?.name as string}
                        fill
                        className="mx-auto rounded-full object-cover"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-4 px-4 pt-4 text-center">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-sm font-light ">{description}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-y-2 space-x-4 py-6">
                  {facebook_link && (
                    <Link href={facebook_link} className="">
                      <FaceBookIcon />
                    </Link>
                  )}

                  {telegram_link && (
                    <Link href={telegram_link}>
                      <TelegramIcon />
                    </Link>
                  )}
                  {tiktok_link && (
                    <Link href={tiktok_link}>
                      <TiktokIcon />
                    </Link>
                  )}

                  {map_url && (
                    <Link href={map_url}>
                      <MapIcon />
                    </Link>
                  )}

                  {phone_number && (
                    <div className="flex">
                      <PhoneIcon
                        width={30}
                        hanging={30}
                        className="text-red-600"
                      />
                      <Link
                        href={`tel:${phone_number}`}
                        target="_blank"
                        className="ps-1 text-lg font-semibold text-red-600"
                      >
                        {phone_number}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
