import React, { useContext, useState } from "react";
//----------Components
import TitleBox from "../../../components/Common/TitleBox";
import CategoryCard from "../../../components/Common/CategoryCard";
import ProductCard from "./ProductCard";
import Pagination from "../../../components/Common/Pagination";
import Filtering from "../../../components/Common/Filtering";
import ErrorBox from "../../../components/Common/ErrorBox";
import PendingBox from "../../../components/Common/PendingBox";
//----------Contexts
import { ProductsContext } from "../../../utils/providers/ProductsProvider";
import CartProvider from "../../../utils/providers/CartProvider";

export default function Portfolio() {
  const { products, categoriesTitles, error, isPending } =
    useContext(ProductsContext);

  const [shownProducts, setShownProducts] = useState([]);
  const [allProducts, setAllProducts] = useState(products);

  const filterProductsByCategory = (cat) => {
    let filteredProducts = products.filter(
      (product) => product.category === cat
    );
    setAllProducts(filteredProducts);
  };

  const filterProductsByBrand = (brand) => {
    if (brand === "all") {
      setAllProducts(products);
    } else if (brand === "stock") {
      let stockProducts = products.filter((product) => product.count > 1);
      setAllProducts(stockProducts);
    } else {
      let filteredProducts = products.filter(
        (product) => product.brand === brand
      );
      setAllProducts(filteredProducts);
    }
  };

  return (
    <CartProvider>
      <section className="pt-8 md:pt-16 lg:pt-24">
        <div className="container">
          <TitleBox
            title="محصولات"
            subTitle="به دنیای خوش عطر و طعم قهوه خوش آمدید"
          />
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
                            filterProductsByCategory(category.title);
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <Filtering filterProductsByBrand={filterProductsByBrand} />
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 p-8">
                {shownProducts.map((product) => {
                  return (
                    <ProductCard
                      key={product._id}
                      _id={product._id}
                      isOnSale={product.isOnSale}
                      count={product.count}
                      discount={product.discount}
                      title={product.title}
                      price={product.price}
                      image={product.image}
                    />
                  );
                })}
              </div>
              <Pagination
                items={allProducts.length === 0 ? products : allProducts}
                itemsCount={12}
                pathName={"/store"}
                setShownItems={setShownProducts}
              />
            </>
          )}
        </div>
      </section>
    </CartProvider>
  );
}
