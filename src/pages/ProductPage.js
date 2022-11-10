import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let [loading, setLoading] = useState(false);
  let [productDetail, setProductDetail] = useState({});
  const productDetailApiUrl = "https://fakestoreapi.com/products";
  const { productId } = useParams();

  async function getProductDetail() {
    setLoading(true);
    let response = await fetch(`${productDetailApiUrl}/${productId}`);
    let productData = await response.json();
    setProductDetail(productData);
    setLoading(false);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <div className="p-4 max-w-xs">
          <img src={productDetail.image} alt={productDetail.title}></img>
        </div>
        <div className="p-4 flex flex-col space-y-4">
          <p className="text-lg text-slate-500">{productDetail.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">$ {productDetail.price}</span>
            <p className="cursor-pointer">
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
    </>
  );
}