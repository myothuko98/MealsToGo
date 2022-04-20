import React, { createContext, useEffect, useState } from "react";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);

    loginRequest(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{ isLoading, isAuthenticated: !!user, user, error, onLogin }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
