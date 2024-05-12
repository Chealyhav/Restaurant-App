"use client";
import {
  ContentProps,
  HeaderProps,
  IRespone,
  IRespones,
  ProductProps,
} from "@/api/interface";
import Image from "next/image";
import React from "react";
import { Element, Link } from "react-scroll";
import { ProductList } from "./products/products-list";
import { getStrapiMedia } from "@/api/api-helpers";

export interface SectionProps {
  product: IRespones<ProductProps>;
  socials: IRespone<HeaderProps>;
  footer: IRespone<ContentProps>;
}

export const Sections: React.FC<SectionProps> = ({
  product,
  socials,
  footer: {
    data: {
      attributes: { title, logo, banner },
    },
  },
}) => {
  const mediaLogo = getStrapiMedia(logo?.data?.attributes?.url);
  const mediaBanner = getStrapiMedia(banner?.data?.attributes?.url);
  return (
    <div>
      <Element
        id="containerElement"
        className="scrollbar-thumb-rounded relative h-[calc(95vh-110px)] overflow-y-scroll px-4 scrollbar-thin  scrollbar-thumb-zinc-200 "
      >
        <div className="">
          {banner.data && (
            <div className="aspect-h-3 aspect-w-5 relative">
              <Image
                src={mediaBanner || ""}
                alt={
                  (banner?.data?.attributes?.name as string) ||
                  "restaurant name"
                }
                fill
                className="rounded-lg border object-cover"
              />
            </div>
          )}
        </div>
        {product.data.map((x) => (
          <Element
            key={x.id}
            name={String(x.id)}
            id={String(x.id)}
            className=""
          >
            <h3 className="pt-4 font-ubuntu text-lg font-semibold sm:text-xl">
              {x.attributes.name}
            </h3>
            <div className="h-1 w-full rounded-md bg-red-600"></div>

            <div className="py-2">
              <h3 className=" text-lg font-semibold sm:text-xl">
                {x.attributes.products.data.map((x: any) => (
                  <ProductList
                    key={x.id}
                    product={x.attributes}
                    social={socials}
                    isOpen
                  />
                ))}
              </h3>
            </div>
          </Element>
        ))}
        <div className="pb-8 text-center">
          <h6 className="pb-4  text-gray-600">{title}</h6>
          {logo.data && (
            <div className="aspect-h-1 aspect-w-7 relative mx-auto w-32">
              <Image
                src={mediaLogo || ""}
                alt={logo?.data?.attributes?.name || "banner name"}
                fill
                className="mx-auto object-contain"
              />
            </div>
          )}
        </div>
      </Element>
    </div>
  );
};

interface ScrollSectionProps {
  id: number;
  name: string;
}
export const Navigation: React.FC<ScrollSectionProps> = ({ id, name }) => {
  const scrollToElement = (elementName: string) => {
    const element = document.getElementById(elementName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <Link
      activeClass="active text-red-700 bg-red-100"
      to={String(id)}
      spy={true}
      smooth={true}
      duration={700}
      containerId="containerElement"
      className="h-fit whitespace-nowrap rounded-2xl  border-2 border-red-600 p-0 px-2 text-base  font-semibold  text-black  sm:py-1"
      onClick={() => scrollToElement(String(id))}
    >
      {name}
    </Link>
  );
};
