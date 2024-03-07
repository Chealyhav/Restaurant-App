import { ProductPopupProps } from "@/app/api/interface";
import { Dialog, Transition } from "@headlessui/react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  FaceBookIcon,
  MapIcon,
  TelegramIcon,
  TiktokIcon,
} from "../socials-Icon";
import { getStrapiMedia } from "@/app/api/api-helpers";

export const ProductPopup: React.FC<ProductPopupProps> = ({
  isOpen,
  onClose,
  product,
  social: {
    data: {
      attributes: {
        facebook_link,
        telegram_link,
        phone_number,
        map_url,
        tiktok_link,
      },
    },
  },
}) => {
  const mediaProduct = getStrapiMedia(product?.src?.data?.attributes?.url);
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10"
        onClose={onClose ? onClose : () => null}
      >
        <div className="flex min-h-screen items-center justify-center max-sm:px-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 z-20 bg-gray-100/60 opacity-100 backdrop-blur-sm  max-sm:px-10 " />
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
            <div className="scrollbar-thumb-rounded  z-30 mx-auto  h-full max-h-[85vh] w-full max-w-md scale-100  transform overflow-y-auto rounded-lg border bg-white text-left align-middle opacity-100 shadow-lg transition-all scrollbar-thin ">
              <div className="relative ">
                <div className="absolute left-4  z-30  ">
                  {product.menutags.data.map((x) => (
                    <div key={x.id} className="flex flex-row space-x-2 pt-2 ">
                      {x.attributes.name && (
                        <p className="rounded-lg border border-red-600 bg-red-600 px-2 py-1 text-center  text-sm font-semibold text-white">
                          {x.attributes.name}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="absolute right-4  z-30 flex pt-4">
                  <button
                    className="rounded-md border-2 border-gray-300 bg-red-600 duration-75"
                    onClick={onClose}
                  >
                    <XMarkIcon
                      width={24}
                      hanging={24}
                      className="font-bold text-white"
                    />
                  </button>
                </div>
                <div className="aspect-h-1 aspect-w-1 relative rounded-lg   shadow-sm max-sm:aspect-h-2 max-sm:aspect-w-2">
                  <Image
                    src={mediaProduct || ""}
                    alt={product.name || "product name"}
                    layout="fill"
                    objectFit="cover"
                    className="select-none rounded-t-lg"
                  />
                </div>

                <div className="space-y-4 px-4 pt-4">
                  <div className="flex space-x-6">
                    <h3 className=" text-base font-semibold text-red-600">
                      ${product.priceUSD}
                    </h3>
                    <h3 className="text-base font-semibold text-red-600">
                      KHR {product.priceKHR}
                    </h3>
                  </div>
                  <div className="">
                    <p className="text-sm font-semibold text-red-600 ">
                      ID: {product.code}
                    </p>
                    <h2 className=" text-sm font-semibold sm:text-lg">
                      {product.name}
                    </h2>
                  </div>

                  <p className="line-clamp-3 text-xs font-light">
                    {product.des}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-y-2 space-x-4 py-4">
                  {facebook_link && (
                    <Link href={facebook_link}>
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
