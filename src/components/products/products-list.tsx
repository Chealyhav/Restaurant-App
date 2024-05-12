"use client";
import { useState } from "react";
import { Products } from "./products";
import { ProductPopup } from "./products-popup";
import { ProductPopupProps } from "@/api/interface";

export const ProductList: React.FC<ProductPopupProps> = ({
  product,
  social,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div  onClick={openModal}>
        <Products
          isOpen={isOpen}
          onClose={closeModal}
          product={product}
          social={social}
        />
      </div>
      <ProductPopup
        isOpen={isOpen}
        onClose={closeModal}
        product={product}
        social={social}
      />
    </div>
  );
};
