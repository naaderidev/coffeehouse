import React, { useContext } from "react";
//----------Components
import SectionTitle from "../../../components/Common/SectionTitle";
import BlogCard from "../../Blog/components/BlogCard";
import ErrorBox from "../../../components/Common/ErrorBox";
import PendingBox from "../../../components/Common/PendingBox";
import useDateFa from "../../../utils/hooks/useDateFa";
//----------Contexts
import { BlogContext } from "../../../utils/providers/BlogProvider";

export default function BlogSection() {
  const { articles, error, isPending } = useContext(BlogContext);
  return (
    <section className="pt-8 md:pt-16 lg:pt-24">
      <div className="container">
        <SectionTitle
          title="دانستنی های قهوه"
          subTitle="تمام آنچه نیاز دارید در مورد قهوه بدانید"
          link="/blog/1"
          linkTitle="مشاهده مجله"
        />
        {error && <ErrorBox />}
        {isPending && <PendingBox />}
        {!error && !isPending && (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-5 p-8">
            {articles.slice(0, 4).map((article) => {
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
        )}
      </div>
    </section>
  );
}
