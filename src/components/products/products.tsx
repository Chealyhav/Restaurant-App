import { ProductPopupProps } from "@/api/interface";
import Image from "next/image";
import { getStrapiMedia } from "@/api/api-helpers";

export const Products: React.FC<ProductPopupProps> = ({ product }) => {
  const mediaProduct = getStrapiMedia(product?.src?.data?.attributes?.url);
  return (
    <div className="grid grid-cols-12 border-b border-gray-400 py-4 ">
      <div className="col-span-2 sm:w-16 ">
        <div className="aspect-h-1 aspect-w-1 relative ">
          <Image
            src={mediaProduct || ""}
            alt={product.name || "product name"}
            fill
            className=" rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="col-span-7 max-sm:ps-2 ">
        <div className="flex flex-wrap space-y-2">
          <div className="flex flex-wrap">
            {product.menutags.data.map((x) => (
              <div key={x.id} className="pt-1 ps-1">
                {x.attributes.name && (
                  <p className="h-fit w-fit rounded-lg border border-red-600 bg-red-100 px-1 text-center text-sm text-red-600">
                    {x.attributes.name}
                  </p>
                )}
              </div>
            ))}
          </div>
          {product.code && (
            <div className="text-sm font-semibold text-red-600">
              ID: {product.code}
            </div>
          )}
        </div>
        <h1 className="py-1 text-sm font-semibold ">
          {product.name}
        </h1>
        <p className="break-words text-sm font-light w-full line-clamp-3">{product.des}</p>
      </div>

      <div className="col-span-3  text-end">
        {product.priceUSD && (
          <div className="text-sm font-semibold text-red-600 ">
            ${product.priceUSD}
          </div>
        )}
        {product.priceKHR && (
          <div className="text-sm font-semibold text-red-600">
            KHR{product.priceKHR}
          </div>
        )}
      </div>
    </div>
  );
};
