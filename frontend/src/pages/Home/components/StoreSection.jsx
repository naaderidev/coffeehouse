import React, { useContext } from "react";
//----------Components
import SectionTitle from "../../../components/Common/SectionTitle";
import ErrorBox from "../../../components/Common/ErrorBox";
import PendingBox from "../../../components/Common/PendingBox";
//----------Contexts
import { ProductsContext } from "../../../utils/providers/ProductsProvider";
import CartProvider from "../../../utils/providers/CartProvider";
import ProductSlider from "./ProductSlider";

export default function StoreSection() {
  const { products, error, isPending } = useContext(ProductsContext);
  return (
    <CartProvider>
      <section className="products pt-8 md:pt-16 lg:pt-24">
        <div className="container">
          <SectionTitle
            title="جدیدترین محصولات"
            subTitle="فرآوری شده از تازه ترین دانه های قهوه"
            link="/store/1"
            linkTitle="مشاهده فروشگاه"
          />
          {error && <ErrorBox />}
          {isPending && <PendingBox />}
          {!error && !isPending && <ProductSlider products={products} />}
        </div>
      </section>
    </CartProvider>
  );
}
