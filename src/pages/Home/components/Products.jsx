import React from "react";
import { PRODUCTS, LeftDouble, RightDouble, Leaf  } from "../../../CONSTANTS";

const Products = ({ background, id, classs }) => {

  return (
    <div style={{ backgroundImage: `url(${background})` }} className="relative" id={id}>
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-36 overflow-hidden">
          <Leaf className="absolute -top-28 left-20" />
        </div>
      </div>
      <div className="relative flex  h-fit text-white pl-36 z-0 "> 
        <p className="text-[38px] text-[#D29A5A] border-b-4 border-[#D29A5A] py-2 w-fit pr-64 absolute -top-12">
          CHEF MATT PRODUCTS
        </p>
        <p className="pt-12 ">
          Shop Gourmet Chef Quality products from the Chef Matt brand. <br />
          Chef it yourself and Thank us later.
        </p>
      </div>
      <div className="flex items-center justify-center pt-16">
        <LeftDouble />
        {PRODUCTS.map((product) => {
          const { mrp, price, title, Product } = product;
          return (
            <div className="flex flex-col items-center justify-center">
              <Product />
              <p className="text-[#D29A5A]">{title}</p>
              <div className="flex text-white space-x-2">
                <p className="line-through">{mrp}</p>
                <p>{price}</p>
              </div>
            </div>
          );
        })}
        <RightDouble />
      </div>
    </div>
  );
};

export default Products;
