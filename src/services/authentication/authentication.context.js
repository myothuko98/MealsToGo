import React, { createContext, useEffect, useState } from "react";
import { loginRequest, RegisterRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, []);

  const onRegister = (email, password, repeatedPassword) => {
  
    if (password !== repeatedPassword) {
      setError("Error : Password do not match");
      return;
    }
    setIsLoading(true);
    RegisterRequest(email, password, repeatedPassword)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

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
      value={{
        isLoading,
        isAuthenticated: !!user,
        user,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
