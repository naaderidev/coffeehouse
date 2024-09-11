import { createBrowserRouter } from "react-router-dom";

import Article from "../pages/Article/Article.jsx";
import Blog from "../pages/Blog/Blog.jsx";
import Cafe from "../pages/Cafe/Cafe.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Product from "../pages/Product/Product.jsx";
import Store from "../pages/Store/Store.jsx";
import EmailLogin from "../pages/Login/components/EmailLogin.jsx";
import SignUp from "../pages/Login/components/SignUp.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

let routes = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/blog/:page", element: <Blog />, errorElement: <ErrorPage /> },
  { path: "/cafe/:page", element: <Cafe />, errorElement: <ErrorPage /> },
  { path: "/contact", element: <Contact />, errorElement: <ErrorPage /> },
  { path: "/store/:page", element: <Store />, errorElement: <ErrorPage /> },
  { path: "/cart", element: <Cart />, errorElement: <ErrorPage /> },
  {
    path: "/login/*",
    element: <Login />,
    errorElement: <ErrorPage />,
    children: [
      { path: "email", element: <EmailLogin /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  {
    path: "/products/:productID",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/articles/:articleID",
    element: <Article />,
    errorElement: <ErrorPage />,
  },
]);

export default routes;
