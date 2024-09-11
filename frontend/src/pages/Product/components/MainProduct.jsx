import React, { useState, useContext } from "react";
//----------Components
import ImageLoader from "../../../components/Common/ImageLoader";
import Breadcrumb from "../../../components/Common/BreadCrumb";
//----------Context
import { CartContext } from "../../../utils/providers/CartProvider";
//----------Icons
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function MainProduct({ mainProduct }) {
  const { productPriceByDiscount, insertItemToCart } = useContext(CartContext);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [qty, setQty] = useState(1);

  return (
    <>
      <Breadcrumb link="/store/1" sublink={mainProduct.title} />
      <section className="p-8 md:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          {/* Right Sidebar */}
          <div className="lg:col-span-9 flex flex-col md:flex-row gap-6">
            {/* Product Photo */}
            <div className="flex-center w-full md:w-1/3 product-shadow rounded-xl">
              <img
                className={isImgLoaded ? "block" : "hidden"}
                src={mainProduct.image}
                alt=""
                onLoad={() => setIsImgLoaded(true)}
              />
              {!isImgLoaded && <ImageLoader style="h-32 md:h-48" />}
            </div>
            {/* Right Description */}
            <div className="mt-6 w-full md:w-2/3">
              <div className="pb-2 space-y-3 text-zinc-700 dark:text-orange-300 mb-8">
                <h3 className="text-subtitle sm:text-title mb-8">
                  {mainProduct.title}
                </h3>
                <h4 className="text-regular sm:text-subtitle">
                  {mainProduct.subtitle}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center w-52 text-link bg-orange-200/45 dark:bg-orange-200 rounded-full px-3 py-1.5">
                  <img
                    src="/images/icons/icons8-coffee-roaster-50.png"
                    alt=""
                    className="icon-md"
                  />
                  <span>برشتگی: </span>
                  <span>{mainProduct.roasting}</span>
                </div>
                <div className="flex items-center w-52 text-link bg-orange-200/45 dark:bg-orange-200 rounded-full px-3 py-1.5">
                  <img
                    src="/images/icons/icons8-coffee-grinder-64.png"
                    alt=""
                    className="icon-md"
                  />
                  <span>درجه آسیاب: </span>
                  <span>{mainProduct.grinding}</span>
                </div>
                <div className="flex items-center w-52 text-link bg-orange-200/45 dark:bg-orange-200 rounded-full px-3 py-1.5">
                  <img
                    src="/images/icons/icons8-weight-kg-50.png"
                    alt=""
                    className="icon-md"
                  />
                  <span>وزن: </span>
                  <span>{mainProduct.weight} گرم</span>
                </div>
                <div className="flex items-center w-52 text-link bg-orange-200/45 dark:bg-orange-200 rounded-full px-3 py-1.5">
                  <img
                    src="/images/icons/icons8-aroma-78.png"
                    alt=""
                    className="icon-md"
                  />
                  <span>طعم یاد: </span>
                  <span>{mainProduct.aroma}</span>
                </div>
                <div className="flex items-center w-52 text-link bg-orange-200/45 dark:bg-orange-200 rounded-full px-3 py-1.5">
                  <img
                    src="/images/icons/icons8-coffee-beans-50.png"
                    alt=""
                    className="icon-md"
                  />
                  <span>کافئین: </span>
                  <span>{mainProduct.caffeine}</span>
                </div>
                <div className="flex items-center w-52 text-link bg-orange-200/45 dark:bg-orange-200 rounded-full px-3 py-1.5">
                  <img
                    src="/images/icons/icons8-growing-plant-50.png"
                    alt=""
                    className="icon-md"
                  />
                  <span>گونه: </span>
                  <span>{mainProduct.type}</span>
                </div>
              </div>
              <div className="text-zinc-700 dark:text-gray-200 my-6">
                <h3 className="text-subtitle mb-4">معرفی محصول</h3>
                <p className="text-link leading-7 md:text-regular md:leading-9 text-justify">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                </p>
              </div>
            </div>
          </div>
          {/* Left Sidebar */}
          <div className="lg:col-span-3 p-8 text-zinc-700 dark:text-gray-200 space-y-4">
            {/* Price */}
            <div className="flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl xl:text-3xl tracking-normal font-DanaDemiBold text-start">
                {productPriceByDiscount(
                  mainProduct.price,
                  mainProduct.discount
                ).toLocaleString()}
                <span className="mr-1">تومان</span>
              </h2>
              {mainProduct.isOnSale ? (
                <div className="flex">
                  <h4 className="text-regular line-through decoration-red-400 text-slate-400">
                    {mainProduct.price.toLocaleString()}
                    <span className="mr-1">تومان</span>
                  </h4>
                  <span className="text-regular sm:text-subtitle text-teal-700 mr-2">
                    {mainProduct.discount} %
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center w-fit gap-6 py-1.5 sm:py-1 px-2 border border-orange-300 rounded-xl">
              <FaPlus
                className="w-3 h-3 xl:icon-sm cursor-pointer"
                onClick={() =>
                  qty >= mainProduct.count
                    ? qty === mainProduct.count
                    : setQty(qty + 1)
                }
              />
              <span className="text-link sm:text-regular lg:text-subtitle">
                {qty}
              </span>
              <FaMinus
                className="w-3 h-3 xl:icon-sm cursor-pointer"
                onClick={() => (qty <= 1 ? qty === 0 : setQty(qty - 1))}
              />
            </div>
            <button
              type="submit"
              className={`btn-gradient flex-center gap-2 w-fit xs:min-w-[173px] text-link sm:text-regular dark:hover:text-zinc-700 ${
                !mainProduct.count ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={!mainProduct.count}
              onClick={() => {
                insertItemToCart(mainProduct, qty)
              }}
            >
              <span className="hidden xs:block">افزودن به سبد خرید</span>
              <HiOutlineShoppingCart className="icon-sm" />
            </button>
            {/* Features */}
            <div className="grid grid-cols-2 xs:grid-cols-1 child:mb-2">
              <figure className="flex items-center gap-2">
                <img
                  src="/images/icons/box.svg"
                  alt=""
                  className="icon p-2 rounded-xl bg-orange-200/45 dark:bg-orange-200"
                />
                <figcaption className="text-link md:text-regular hidden xs:block">
                  تضمین اصالت کالا
                </figcaption>
              </figure>
              <figure className="flex items-center gap-2">
                <img
                  src="/images/icons/delivery-returns.svg"
                  alt=""
                  className="icon p-2 rounded-xl bg-orange-200/45 dark:bg-orange-200"
                />
                <figcaption className="text-link md:text-regular hidden xs:block">
                  7 روز ضمانت بازگشت کالا
                </figcaption>
              </figure>
              <figure className="flex items-center gap-2">
                <img
                  src="/images/icons/support.svg"
                  alt=""
                  className="icon p-2 rounded-xl bg-orange-200/45 dark:bg-orange-200"
                />
                <figcaption className="text-link md:text-regular hidden xs:block">
                  پشتیبانی سریع و آنلاین
                </figcaption>
              </figure>
              <figure className="flex items-center gap-2">
                <img
                  src="/images/icons/delivery-truck-2.svg"
                  alt=""
                  className="icon p-2 rounded-xl bg-orange-200/45 dark:bg-orange-200"
                />
                <figcaption className="text-link md:text-regular hidden xs:block">
                  امکان تحویل اکسپرس
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
