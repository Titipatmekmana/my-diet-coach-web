import { createContext, useEffect, useState } from "react";

import * as authApi from "../apis/auth-api";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? {} : null
  );

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);

  const login = async (emailOrMobile, password) => {
    const res = await authApi.login({ emailOrMobile, password });
    setAccessToken(res.data.accessToken);
    console.log(res.data.user);
    setAuthenticatedUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ authenticatedUser, login, logout, setAuthenticatedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// authcontext use for fix the problem of popduring and use for all componnet in our project
