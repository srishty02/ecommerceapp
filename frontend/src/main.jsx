import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  {/* ✅ Add this for better debugging */}
    <BrowserRouter>
      <ShopContextProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
