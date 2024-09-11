import { apiRequest } from "../config";

export const getAllProducts = async () => {
  return await apiRequest.get("/product");
};

export const getAllProductsCategories = async () => {
  return await apiRequest.get("/product-category");
};

export const getMainProduct = async (productID) => {
  return await apiRequest.get(`/product/${productID}`);
};
