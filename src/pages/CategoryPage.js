import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function CheckoutPage() {
  const states = ["Goa", "Andhra Pradesh", "Telangana"];
  const cartCheckoutForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
      state: "",
      city: "",
      phoneNumber: "",
    },
    onSubmit: function (values) {
      console.log(values);
      cartCheckoutForm.handleReset();
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      addressLine1: Yup.string().required("Address Line 1 is required"),
      addressLine2: Yup.string(),
      zipCode: Yup.string()
        .required("Zip Code is required")
        .matches(/^\d{6}$/, { message: "Zip Code must have 6 digits" }),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(/^\d{10}$/, { message: "Phone Number must have 10 digits" }),
    }),
  });

  return (
    <>
      <div className="container mx-auto max-w-md shadow-md mt-16 p-6">
        <form className="" onSubmit={cartCheckoutForm.handleSubmit}>
          <fieldset>
            <legend className="text-2xl border-b border-gray-300 mb-4">
              Shopping Cart Checkout
            </legend>
            <div className="flex flex-col mb-4">
              <label htmlFor="firstName" className="text-md text-slate-500">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500
              ${
                cartCheckoutForm.touched.firstName &&
                cartCheckoutForm.errors.firstName
                  ? "border-red-500"
                  : ""
              }`}
                onChange={cartCheckoutForm.handleChange}
                onBlur={cartCheckoutForm.handleBlur}
                value={cartCheckoutForm.values.firstName}
              />
              {cartCheckoutForm.touched.firstName &&
                cartCheckoutForm.errors.firstName && (
                  <span className="text-red-500 text-sm inline-flex mt-1">
                    {cartCheckoutForm.errors.firstName}
                  </span>
                )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="lastName" className="text-md text-slate-500">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500
              ${
                cartCheckoutForm.touched.lastName &&
                cartCheckoutForm.errors.lastName
                  ? "border-red-500"
                  : ""
              }`}
                onChange={cartCheckoutForm.handleChange}
                onBlur={cartCheckoutForm.handleBlur}
                value={cartCheckoutForm.values.lastName}
              />
              {cartCheckoutForm.touched.lastName &&
                cartCheckoutForm.errors.lastName && (
                  <span className="text-red-500 text-sm inline-flex mt-1">
                    {cartCheckoutForm.errors.lastName}
                  </span>
                )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="addressLine1" className="text-md text-slate-500">
                Address Line 1
              </label>
              <textarea
                type="text"
                name="addressLine1"
                id="addressLine1"
                className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500
              ${
                cartCheckoutForm.touched.addressLine1 &&
                cartCheckoutForm.errors.addressLine1
                  ? "border-red-500"
                  : ""
              }`}
                onChange={cartCheckoutForm.handleChange}
                onBlur={cartCheckoutForm.handleBlur}
                value={cartCheckoutForm.values.addressLine1}
              ></textarea>
              {cartCheckoutForm.touched.addressLine1 &&
                cartCheckoutForm.errors.addressLine1 && (
                  <span className="text-red-500 text-sm inline-flex mt-1">
                    {cartCheckoutForm.errors.addressLine1}
                  </span>
                )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="addressLine2" className="text-md text-slate-500">
                Address Line 2
              </label>
              <textarea
                type="text"
                name="addressLine2"
                id="addressLine2"
                className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500
              ${
                cartCheckoutForm.touched.addressLine2 &&
                cartCheckoutForm.errors.addressLine2
                  ? "border-red-500"
                  : ""
              }`}
                onChange={cartCheckoutForm.handleChange}
                onBlur={cartCheckoutForm.handleBlur}
                value={cartCheckoutForm.values.addressLine2}
              ></textarea>
              {cartCheckoutForm.touched.addressLine2 &&
                cartCheckoutForm.errors.addressLine2 && (
                  <span className="text-red-500 text-sm inline-flex mt-1">
                    {cartCheckoutForm.errors.addressLine2}
                  </span>
                )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="zipCode" className="text-md text-slate-500">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                id="zipCode"
                className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500
              ${
                cartCheckoutForm.touched.zipCode &&
                cartCheckoutForm.errors.zipCode
                  ? "border-red-500"
                  : ""
              }`}
                onChange={cartCheckoutForm.handleChange}
                onBlur={cartCheckoutForm.handleBlur}
                value={cartCheckoutForm.values.zipCode}
              />
              {cartCheckoutForm.touched.zipCode &&
                cartCheckoutForm.errors.zipCode && (
                  <span className="text-red-500 text-sm inline-flex mt-1">
                    {cartCheckoutForm.errors.zipCode}
                  </span>
                )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="state" className="text-md text-slate-500">
                State
              </label>
              <select
                name="state"
                id="state"
                className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500
              ${
                cartCheckoutForm.touched.state && cartCheckoutForm.errors.state
                  ? "border-red-500"
                  : ""
              }`}
                onChange={cartCheckoutForm.handleChange}
                onBlur={cartCheckoutForm.handleBlur}
                value={cartCheckoutForm.values.state}
              >
                <option value="">Choose State</option>
                {states.map((state, index) => {
                  return (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  );
                })}
              </select>
              {cartCheckoutForm.touched.state &&
                cartCheckoutForm.errors.state && (
                  <span className="text-red-500 text-sm inline-flex mt-1">
                    {cartCheckoutForm.errors.state}
                  </span>
                )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="city" className="text-md text-slate-500">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500
              ${
                cartCheckoutForm.touched.city && cartCheckoutForm.errors.city
                  ? "border-red-500"
                  : ""
              }`}
                onChange={cartCheckoutForm.handleChange}
                onBlur={cartCheckoutForm.handleBlur}
                value={cartCheckoutForm.values.city}
              />
              {cartCheckoutForm.touched.city &&
                cartCheckoutForm.errors.city && (
                  <span className="text-red-500 text-sm inline-flex mt-1">
                    {cartCheckoutForm.errors.city}
                  </span>
                )}
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="phoneNumber"
                className="flex text-sm font-medium text-slate-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500
              ${
                cartCheckoutForm.touched.phoneNumber &&
                cartCheckoutForm.errors.phoneNumber
                  ? "border-red-500"
                  : ""
              }`}
                onChange={cartCheckoutForm.handleChange}
                onBlur={cartCheckoutForm.handleBlur}
                onInput={cartCheckoutForm.handleBlur}
                value={cartCheckoutForm.values.phoneNumber}
              />
              {cartCheckoutForm.touched.phoneNumber &&
                cartCheckoutForm.errors.phoneNumber && (
                  <span className="text-red-500 text-sm inline-flex mt-1">
                    {cartCheckoutForm.errors.phoneNumber}
                  </span>
                )}
            </div>
            <button
              type="submit"
              className="px-6 py-2 shadow-md inline-flex mt-4 place-content-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}