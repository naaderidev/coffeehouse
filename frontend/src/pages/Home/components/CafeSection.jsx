import React, { useEffect, useState } from "react";
//----------Components
import SectionTitle from "../../../components/Common/SectionTitle";
import CafeCategoryCard from "./CafeCategoryCard";
import { apiRequest } from "../../../api/axios/config";
import ErrorBox from "../../../components/Common/ErrorBox";
import PendingBox from "../../../components/Common/PendingBox";

export default function CafeSection() {
  const [cafeCategory, setCafeCategory] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const getcafeCategory = async () => {
    await apiRequest
      .get("/cafe")
      .then((res) => {
        setCafeCategory(res.data.cafeCategories);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  };

  useEffect(() => {
    getcafeCategory();
  }, []);

  return (
    <section className="cafe pt-8 md:pt-16 lg:pt-24">
      <div className="container">
        <SectionTitle
          title="یک فنجان آرامش"
          subTitle="در فضایی دنج و روح نواز با امکان رزرو میز"
          link="/cafe"
          linkTitle="مشاهده کافه"
        />
        {error && <ErrorBox />}
        {isPending && <PendingBox />}
        {!error && !isPending && (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-5 p-8">
            {cafeCategory.map((category) => {
              return (
                <CafeCategoryCard
                  key={category._id}
                  title={category.title}
                  subtitle={category.subtitle}
                  image={category.image}
                  icon={category.icon}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
