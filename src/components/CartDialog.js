import { React, useContext } from "react";
import { Dialog } from "@headlessui/react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function CartDialog() {
  let contextData = useContext(AppContext);
  let navigate = useNavigate();

  function removeProductFromCart(cartProduct) {
    contextData.setProductsAddedToCart([
      ...contextData.productsAddedToCart.filter(
        (product) => product.id !== cartProduct.id
      ),
    ]);
  }

  function checkout() {
    contextData.setIsOpen(false);
    navigate("/checkout");
  }

  return (
    <Dialog
      open={contextData.isOpen}
      onClose={() => contextData.setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="h-screen bg-white w-96 fixed right-0 p-4 flex flex-col">
          <Dialog.Title>Cart</Dialog.Title>
          <Dialog.Description>Add products to cart</Dialog.Description>
          <div className="h-full flex flex-col mt-6">
            <div className="h-full flex flex-col overflow-y-auto space-y-4">
              {contextData.productsAddedToCart.length === 0 && (
                <>
                  <div className="h-full flex flex-col place-content-center">
                    <p className="text-lg text-slate-500 text-center">
                      No products found in the cart
                    </p>
                  </div>
                </>
              )}
              {contextData.productsAddedToCart.length > 0 &&
                contextData.productsAddedToCart.map((cartProduct) => {
                  console.log(cartProduct);
                  return (
                    <>
                      <div
                        key={cartProduct.id}
                        className="flex flex-col shadow-sm px-4 py-2 border border-slate-400 space-y-2"
                      >
                        <div className="flex justify-between items-center space-x-2">
                          <div className="w-14">
                            <img
                              src={cartProduct.image}
                              alt={cartProduct.title}
                            ></img>
                          </div>
                          <span className="text-slate-500 text-sm text-left">
                            {cartProduct.title}
                          </span>
                          <span className="text-slate-500 whitespace-nowrap text-md">
                            $ {cartProduct.price}
                          </span>
                        </div>
                        <button
                          className="px-2 py-1 text-white bg-red-500 shadow-md mt-1 w-max self-end text-sm"
                          onClick={() => {
                            removeProductFromCart(cartProduct);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </>
                  );
                })}
            </div>
            <button
              className="px-3 py-2 bg-blue-500 shadow-md text-white w-3/4 self-center my-4"
              onClick={() => checkout()}
            >
              Checkout
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}