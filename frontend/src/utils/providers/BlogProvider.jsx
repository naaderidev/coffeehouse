import React, { createContext, useState, useEffect } from "react";
import {
  getAllArticles,
  getAllArticlesCategories,
} from "../../api/axios/requests/BlogRequests";
export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [categoriesTitles, setCategoriesTitles] = useState([]);

  useEffect(() => {
    fetchAllArticles();
    fetchAllCategoriesTitles();
  }, []);

  function fetchAllArticles() {
    getAllArticles()
      .then((res) => {
        setArticles(res.data.journals);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }

  function fetchAllCategoriesTitles() {
    getAllArticlesCategories()
      .then((res) => {
        setCategoriesTitles(res.data.journalCategories);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }

  return (
    <BlogContext.Provider
      value={{
        articles,
        error,
        isPending,
        categoriesTitles,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
