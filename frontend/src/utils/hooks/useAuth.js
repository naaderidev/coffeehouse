import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";

export default function useAuth() {
  const { isLoggedIn, userInfo, logout } = useContext(authContext);

  return { isLoggedIn, userInfo, logout };
}
