import React, { createContext, useEffect, useState } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.services";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retreiveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((res) => {
          setIsLoading(false);
          setRestaurants(res);
        })
        .catch((err) => setError(err));
    }, 2000);
  };

  useEffect(() => {
    retreiveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
