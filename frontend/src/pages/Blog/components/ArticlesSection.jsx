import React, { useContext, useState } from "react";
//----------Components
import TitleBox from "../../../components/Common/TitleBox";
import BlogCard from "./BlogCard";
import CategoryCard from "../../../components/Common/CategoryCard";
import Pagination from "../../../components/Common/Pagination";
import ErrorBox from "../../../components/Common/ErrorBox";
import PendingBox from "../../../components/Common/PendingBox";
import useDateFa from "../../../utils/hooks/useDateFa";
//----------Contexts
import { BlogContext } from "../../../utils/providers/BlogProvider";

export default function ArticlesSection() {
  const { articles, categoriesTitles, error, isPending } =
    useContext(BlogContext);

  const [shownArticles, setShownArticles] = useState([]);
  const [allArticles, setAllArticles] = useState(articles);

  const filterArticles = (cat) => {
    let filteredArticles = articles.filter(
      (article) => article.category === cat
    );
    setAllArticles(filteredArticles);
  };

  return (
    <section className="pt-8 md:pt-16 lg:pt-24">
      <div className="container">
        <TitleBox title="مقالات" subTitle="هر آنچه باید از دنیای قهوه بدانید" />
        {error && <ErrorBox />}
        {isPending && <PendingBox />}
        {!error && !isPending && (
          <>
            <div className="py-4">
              <div className="container">
                <div className="flex-center flex-wrap gap-4">
                  {categoriesTitles.map((category) => {
                    return (
                      <CategoryCard
                        key={category._id}
                        title={category.titlePersian}
                        img={category.image}
                        filterHandler={() => {
                          filterArticles(category.title);
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 p-8">
              {shownArticles.map((article) => {
                return (
                  <BlogCard
                    key={article._id}
                    id={article._id}
                    image={article.image}
                    title={article.title}
                    date={useDateFa(new Date(article.createdAt)).day}
                    month={useDateFa(new Date(article.createdAt)).monthTitle}
                    year={useDateFa(new Date(article.createdAt)).year}
                  />
                );
              })}
            </div>
            <Pagination
              items={allArticles.length === 0 ? articles : allArticles}
              itemsCount={8}
              pathName={"/blog"}
              setShownItems={setShownArticles}
            />
          </>
        )}
      </div>
    </section>
  );
}
