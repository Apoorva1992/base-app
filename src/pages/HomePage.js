import { React, useContext, useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ProductCard from "../components/ProductCard";
import AppContext from "../context/AppContext";
import ProductPage from "./ProductPage";
//import { useParams } from 'react-router-dom'

export default function HomePage() {
  let {categoryName} = useParams();
  let [api,setApi] = useState('https://fakestoreapi.com/products')
  console.log(categoryName,"----categoryName");
  
  let contextData = useContext(AppContext);
  let [loading, setLoading] = useState(false);
  let [allProducts, setAllProducts] = useState([]);
  let allProductsApiUrl = "https://fakestoreapi.com/products";

  if(categoryName !== undefined){
    setApi (`https://fakestoreapi.com/products/category/${categoryName}`);
    allProductsApiUrl= `https://fakestoreapi.com/products/category/${categoryName}`
  }
  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  async function getAllProducts() {
    setLoading(true);
    let response = await fetch(allProductsApiUrl);
    let allProductsData = await response.json();
    setAllProducts(allProductsData);
    setLoading(false);
  }

  function addToCart(event, product) {
    event.preventDefault();
    event.stopPropagation();
    const doesProductExistInCart =
      contextData.productsAddedToCart.length > 0 &&
      contextData.productsAddedToCart.some(
        (cartProduct) => cartProduct.id === product.id
      );

    if (!doesProductExistInCart) {
      contextData.setProductsAddedToCart([
        ...contextData.productsAddedToCart,
        product,
      ]);
      notifySuccess("Product added to cart successfully");
    } else {
      notifyError("Product exists in the cart!!");
    }
  }

  useEffect(() => {
    getAllProducts();
    if ("shoppingCartList" in localStorage) {
      contextData.setProductsAddedToCart(
        JSON.parse(localStorage.getItem("shoppingCartList"))
      );
    }
  }, [api]);

  useEffect(() => {
    localStorage.setItem(
      "shoppingCartList",
      JSON.stringify(contextData.productsAddedToCart)
    );
  }, [contextData.productsAddedToCart]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="grid grid-cols-4 gap-4">
        {allProducts.length > 0 &&
          allProducts.map((product) => {
            return (
              <>
                <Link
                  key={product.id}
                  to={`product/${product.id}`}
                  element={<ProductPage />}
                >
                  <ProductCard product={product} addToCart={addToCart} />
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
}