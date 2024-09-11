import { apiRequest } from "../config";

export const insertOrder = async (newOrder) => {
  return await apiRequest.post("/order", newOrder);
};
