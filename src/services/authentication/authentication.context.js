import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import {
  loginRequest,
  RegisterRequest,
  SignoutRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, []);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setIsLoading(false);
      setUser(currentUser);
    }
  });

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error : Password do not match");
      return;
    }
    setIsLoading(true);
    RegisterRequest(email, password, repeatedPassword)
      .then((userCredential) => {
        setUser(userCredential.user);
        setError(null);
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
        setError(null);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  const onSignout = () => {
    setIsLoading(true);
    SignoutRequest()
      .then(() => {
        setUser(null);
        setError(null);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
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
        onSignout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
