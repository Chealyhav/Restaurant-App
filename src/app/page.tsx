import Image from "next/image";
import { Profiles } from "@/components/profile/profiles";
import {
  ContentProps,
  HeaderProps,
  IRespone,
  IRespones,
  ProductProps,
} from "../api/interface";
import { Navigation, Sections } from "@/components/scrolls";
import { DataCategory, DataContent, DataProfile } from "../api/fetch-api";

const Restaurant: React.FC = async () => {
  const data = await DataCategory();
  const response = await DataProfile();
  const content = await DataContent();
  return (
    <div className=" mx-auto max-w-xl bg-gray-100">
      <div className="sticky top-0 z-10 w-full border bg-gray-200  px-4 pb-6 pt-2">
        <div className="flex place-items-center justify-between py-2">
          <div className="flex place-items-center  space-x-3">
            <Profiles restaurant={response as IRespone<HeaderProps>} />
            <div className="text-lg font-semibold sm:text-xl">
              {response?.data.attributes.name}
            </div>
          </div>

          <Image
            src="/images/united-kingdom.webp"
            alt=""
            width={24}
            height={24}
            className="size-9 object-cover py-2"
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto py-4">
          {data?.data.map((x: any) => (
            <Navigation key={x.id} id={x.id} name={x.attributes.name} />
          ))}
        </div>
      </div>

      <div className="py-2 ">
        <Sections
          product={data as IRespones<ProductProps>}
          socials={response as IRespone<HeaderProps>}
          footer={content as IRespone<ContentProps>}
        />
      </div>
    </div>
  );
};

export default Restaurant;
