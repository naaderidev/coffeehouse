import { apiRequest } from "../config";

export const postNewComment = async (comment) => {
  return await apiRequest.post("/comment", comment);
};

export const getMainProductComments = async (productId) => {
  return await apiRequest.get(`/comment/${productId}`);
};
