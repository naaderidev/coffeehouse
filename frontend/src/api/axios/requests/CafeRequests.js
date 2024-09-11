import { apiRequest } from "../config";

export const getCafeMenu = async () => {
  return await apiRequest.get("/menu");
};

export const postReservation = async (request) => {
  return await apiRequest.post("/reserve", request);
};
