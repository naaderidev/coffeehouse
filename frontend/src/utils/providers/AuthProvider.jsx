import { createContext, useState, useEffect, useCallback } from "react";

export const authContext = createContext({
  isLoggedIn: false,
  userInfo: null,
  // login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    async function getUser() {
      fetch("http://localhost:4000/api/auth/me", {
        method: "GET",
        credentials: "include", // Important to include cookies
      })
        .then((response) => response.json())
        .then((user) => {
          if (user.data) {
            setUserInfo(user.data);
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        })
        .catch((error) => console.error("Error:", error));
    }
    getUser();
  }, []);

  const logout = useCallback(() => {
    fetch("http://localhost:4000/api/auth/logout", {
      method: "GET",
      credentials: "include", // Important to include cookies
    })
      .then((response) => response.json())
      .then(() => {
        setIsLoggedIn(false);
        setUserInfo({});
        localStorage.removeItem("cart");
        location.reload()
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <authContext.Provider value={{ isLoggedIn, userInfo, logout }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
