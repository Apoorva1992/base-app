import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="flex flex-col flex-1 space-y-4 shadow-md shadow-blue-500/50 h-full px-3 py-2">
      <div className="p-6 w-fit">
        <img src={product.image} alt={product.title}></img>
      </div>
      <div className="px-2 py-4 flex flex-col h-full justify-between space-y-4">
        <p className="text-sm text-slate-500">{product.title}</p>
        <div className="flex justify-between items-center">
          <span className="text-slate-500">$ {product.price}</span>
          <p
            className="cursor-pointer"
            onClick={(event) => {
              addToCart(event, product);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}