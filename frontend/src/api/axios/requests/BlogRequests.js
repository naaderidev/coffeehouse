import { apiRequest } from "../config";

export const getAllArticles = async () => {
  return await apiRequest.get("/journal");
};

export const getAllArticlesCategories = async () => {
  return await apiRequest.get("/journal-category");
};

export const getMainArticle = async (journalID) => {
  return await apiRequest.get(`/journal/${journalID}`);
};
