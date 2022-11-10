import { Navigate, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartDialog from "./components/CartDialog";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="container mx-auto max-w-screen-xl pt-16 ">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="product/:productId" element={<ProductPage />}></Route>
          <Route path="category/:categoryName" element={<HomePage />}></Route>
          <Route path="checkout" element={<CheckoutPage />}></Route>
          <Route path="404" element={<PageNotFoundPage />}></Route>
          <Route path="*" element={<Navigate to="/404" />}></Route>
        </Routes>
      </div>
      <CartDialog />
    </>
  );
}

export default App;