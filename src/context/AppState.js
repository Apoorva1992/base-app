import { React, useState } from "react";
import AppContext from "./AppContext";

export default function AppState({ children }) {
  let [isOpen, setIsOpen] = useState(false);
  let [productsAddedToCart, setProductsAddedToCart] = useState([]);

  // The predefined keyword "children" allows us to project content from AppState component to components written inside AppState component (similar to Angular)
  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
        productsAddedToCart,
        setProductsAddedToCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
}