import { createContext, useContext, useState } from "react";

export const ProductContext = createContext(); // <-- Add `export` here

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
