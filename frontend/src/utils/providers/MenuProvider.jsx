import React, { createContext, useState, useEffect } from "react";
import { getCafeMenu } from "../../api/axios/requests/CafeRequests";
export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [hotMenu, setHotMenu] = useState([]);
  const [coldMenu, setColdMenu] = useState([]);
  const [cookieMenu, setCookieMenu] = useState([]);

  useEffect(() => {
    fetchCafeMenu();
  }, []);

  function fetchCafeMenu() {
    getCafeMenu()
      .then((res) => {
        setMenu(res.data.menu);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }

  useEffect(() => {
    menuFiltering(menu);
  }, [menu]);

  const menuFiltering = (menu) => {
    let hotMenu = menu.filter((item) => item.category === "hot");
    setHotMenu(hotMenu);

    let coldMenu = menu.filter((item) => item.category === "cold");
    setColdMenu(coldMenu);

    let cookieMenu = menu.filter((item) => item.category === "cookie");
    setCookieMenu(cookieMenu);
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        hotMenu,
        coldMenu,
        cookieMenu,
        error,
        isPending,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
