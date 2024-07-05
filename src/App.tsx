import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route
            path={"/product/:productId"}
            element={<ProductDetail />}
          ></Route>
          <Route path={"/cart"} element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
