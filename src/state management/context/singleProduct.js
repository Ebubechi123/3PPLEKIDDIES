import { useState, useContext, createContext } from "react";

const SingleProductContext = createContext();

export const SingleProductProvider = ({ children }) => {
  const [singleProduct, setSingleProduct] = useState([]);
  return (
    <SingleProductContext.Provider value={[singleProduct, setSingleProduct]}>
      {children}
    </SingleProductContext.Provider>
  );
};

export const GetSingleProduct = () => {
  return useContext(SingleProductContext);
};
