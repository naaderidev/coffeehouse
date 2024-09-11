import React, { createContext, useState, useEffect } from "react";
import {
  getAllProducts,
  getAllProductsCategories,
} from "../../api/axios/requests/ProductsRequests";
export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [bestSelling, setBestSelling] = useState([]);
  const [categoriesTitles, setCategoriesTitles] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data.products);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
    getAllProductsCategories()
      .then((res) => {
        setCategoriesTitles(res.data.productCategories);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }, []);

  useEffect(() => {
    productsBestSelling(products);
  }, [products]);

  const productsBestSelling = (productsArray) => {
    let bestSelling = productsArray.filter((product) => product.selling > 100);
    setBestSelling(bestSelling);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        bestSelling,
        error,
        isPending,
        categoriesTitles,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
