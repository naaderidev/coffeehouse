import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
//----------Components
import MainProduct from "./components/MainProduct";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/Common/ContactUs";
import ErrorBox from "../../components/Common/ErrorBox";
import PendingBox from "../../components/Common/PendingBox";
import CommentEditor from "../../components/Comments/CommentEditor";
import CommentContainer from "../../components/Comments/CommentContainer";
import RelatedProducts from "./components/RelatedProducts";
//----------Hooks
import useSwalModal from "../../utils/hooks/useSwalModal";
import useAuth from "../../utils/hooks/useAuth";
import { getMainProduct } from "../../api/axios/requests/ProductsRequests";
//----------Contexts
import CartProvider from "../../utils/providers/CartProvider";
import ProductsProvider from "../../utils/providers/ProductsProvider";
//----------Icons
import {
  HiOutlinePencilSquare,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

export default function Product() {
  const [commentEditor, setCommentEditor] = useState(false);
  const [commentContainer, setCommentContainer] = useState(true);

  const AuthContext = useAuth()
  const navigate = useNavigate();
  const Modal = useSwalModal();
  let params = useParams();

  const [mainProduct, setMainProduct] = useState({});
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMainProduct(params.productID)
      .then((res) => {
        setMainProduct(res.data.mainProduct);
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
      <main className="bg-[#F3F3F3] dark:bg-zinc-900 pt-24 px-8">
        {error && <ErrorBox />}
        {isPending && <PendingBox />}
        {!error && !isPending && (
          <>
            <CartProvider>
              <MainProduct mainProduct={mainProduct} />
            </CartProvider>
            <section className="p-8 md:pt-8">
              <div className="container my-2">
                <nav className="flex items-center justify-start gap-8 flex-wrap m-4 text-gray-500 mb-8">
                  <div
                    className={`nav-sublink flex items-end gap-1 cursor-pointer  ${
                      commentContainer ? "active" : ""
                    }`}
                    onClick={() => {
                      setCommentEditor(false);
                      setCommentContainer(true);
                    }}
                  >
                    <HiOutlineChatBubbleLeftRight className="icon-sm sm:icon-md" />
                    <span>لیست دیدگاه ها</span>
                  </div>
                  <div
                    className={`nav-sublink flex items-end gap-1 cursor-pointer  ${
                      commentEditor ? "active" : ""
                    }`}
                    onClick={() => {
                      setCommentEditor(true);
                      setCommentContainer(false);
                      !AuthContext.isLoggedIn &&
                        Modal.fire({
                          title: "لطفا ابتدا وارد سایت شوید",
                          text: "از طریق لینک زیر وارد حساب کاربری خود شوید",
                          confirmButtonText: "ورود به حساب کاربری",
                          icon: "error",
                          iconColor: "#b91c1c",
                        }).then(() => navigate("/login/email"));
                    }}
                  >
                    <HiOutlinePencilSquare className="icon-sm sm:icon-md" />
                    <span>ارسال دیدگاه</span>
                  </div>
                </nav>
              </div>
              {commentContainer && <CommentContainer />}
              {commentEditor &&
                (AuthContext.isLoggedIn ? <CommentEditor /> : "")}
            </section>
          </>
        )}
        <ProductsProvider>
          <RelatedProducts mainProduct={mainProduct} />
        </ProductsProvider>
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
