import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMainArticle } from "../../api/axios/requests/BlogRequests";
//----------Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/Common/ContactUs";
import Breadcrumb from "../../components/Common/BreadCrumb";
import ImageLoader from "../../components/Common/ImageLoader";
import ErrorBox from "../../components/Common/ErrorBox";
import PendingBox from "../../components/Common/PendingBox";
import useDateFa from "../../utils/hooks/useDateFa";
//----------Icons
import { HiPencilSquare, HiOutlineCalendar } from "react-icons/hi2";
import { GiCoffeeCup } from "react-icons/gi";
import { articleBody } from "../../utils/constants";

export default function Article() {
  let params = useParams();
  const [mainArticle, setMainArticle] = useState({});
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    getMainArticle(params.articleID)
      .then((res) => {
        setMainArticle(res.data.mainJournal);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="bg-[#F3F3F3] dark:bg-zinc-900 pt-2 md:pt-24 px-8">
        <Breadcrumb link="/blog/1" sublink="مقاله" />
        <section className="p-8 md:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
            {/*Container*/}
            {error && <ErrorBox />}
            {isPending && <PendingBox />}
            {!error && !isPending && (
              <div className="lg:col-span-9 text-zinc-700 dark:text-gray-300">
                <h1 className="text-title mb-6">{mainArticle.title}</h1>
                <span className="border-b-2 border-orange-300 block w-[98%] mx-auto border-shadow mb-4"></span>
                <div className="text-link flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 py-3">
                  <h4 className="flex items-end gap-2">
                    <HiPencilSquare className="icon-sm" />
                    <span>نوشته شده توسط تیم تحریریه خانه قهوه</span>
                  </h4>
                  <div className="flex items-end gap-2">
                    <HiOutlineCalendar className="icon-sm" />
                    <span>تاریخ انتشار:</span>
                    <span>{useDateFa(new Date(mainArticle.createdAt)).day}</span>
                    <span>{useDateFa(new Date(mainArticle.createdAt)).monthTitle}</span>
                    <span>{useDateFa(new Date(mainArticle.createdAt)).year}</span>
                  </div>
                </div>
                <img
                  src={mainArticle.image}
                  alt=""
                  className={
                    isImgLoaded ? "rounded-xl w-[90%] mx-auto my-4" : "hidden"
                  }
                  onLoad={() => setIsImgLoaded(true)}
                />
                {!isImgLoaded && <ImageLoader style="h-32 md:h-48" />}
                {/*Article Body*/}
                <div className="text-link sm:text-regular child:leading-loose md:child:leading-8 sm:px-10 child:my-3 child:indent-4">
                  <div>
                    <h1 className="flex items-end text-regular sm:text-subtitle text-orange-400 dark:text-orange-300 mb-4">
                      <GiCoffeeCup className="icon-md" />
                      تیتر فرعی اول مقاله
                    </h1>
                    <p className="text-justify">{articleBody}</p>
                  </div>
                  <div>
                    <h1 className="flex items-end text-regular sm:text-subtitle text-orange-400 dark:text-orange-300 mb-4">
                      <GiCoffeeCup className="icon-md" />
                      تیتر فرعی دوم مقاله
                    </h1>
                    <p className="text-justify">{articleBody}</p>
                    <ul className="child:list-disc child:list-inside">
                      <li>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ
                      </li>
                      <li>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ
                      </li>
                      <li>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ
                      </li>
                      <li>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="flex items-end text-regular sm:text-subtitle text-orange-400 dark:text-orange-300 mb-4">
                      <GiCoffeeCup className="icon-md" />
                      تیتر فرعی سوم مقاله با متن طولانی تر
                    </h1>
                    <p className="text-justify">{articleBody}</p>
                  </div>
                  <div>
                    <h1 className="flex items-end text-regular sm:text-subtitle text-orange-400 dark:text-orange-300 mb-4">
                      <GiCoffeeCup className="icon-md" />
                      تیتر فرعی چهارم مقاله
                    </h1>
                    <p className="text-justify">{articleBody}</p>
                  </div>
                </div>
              </div>
            )}
            {/*Sidebar*/}
            <div className="lg:col-span-3">
              <div className="p-4 product-shadow rounded-xl mb-4">
                <h2 className="text-subtitle text-zinc-700 dark:text-orange-300 mb-2">
                  آنچه در این مقاله می خوانید
                </h2>
                <ul className="list-inside list-disc text-zinc-700 dark:text-gray-300 text-link md:text-regular leading-loose my-2 px-4 child:cursor-pointer">
                  <li>تیتر فرعی اول مقاله</li>
                  <li>تیتر فرعی دوم مقاله</li>
                  <li>تیتر فرعی سوم مقاله با متن طولانی تر</li>
                  <li>تیتر فرعی چهارم مقاله</li>
                </ul>
              </div>
              <div className="p-4 product-shadow rounded-xl mb-4">
                <h2 className="text-subtitle text-zinc-700 dark:text-orange-300 mb-2">
                  جدیدترین مقالات منتشر شده
                </h2>
                <ul className="list-inside list-disc text-zinc-700 dark:text-gray-300 text-link md:text-regular leading-loose my-2 px-4 child:cursor-pointer">
                  <li>فواید قهوه</li>
                  <li>بهترین روش دم آوری</li>
                  <li>تفاوت گونه عربیکا و ربوستا</li>
                  <li>ارتباط کافئین و درجه برشتگی</li>
                  <li>تاثیر کافئین بر عملکرد مغز</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
