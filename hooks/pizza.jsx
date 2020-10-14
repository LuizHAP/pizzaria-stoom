import React, { createContext, useContext, useCallback, useState } from "react";

const PizzaContext = createContext({});

export const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState({});

  const setPasta = (pasta) => {
    Object.assign(pizza, { pasta });
    localStorage.setItem("@pizzaria_stoom", JSON.stringify(pizza));
  };

  const setSize = (size) => {
    Object.assign(pizza, { size });

    localStorage.setItem("@pizzaria_stoom", JSON.stringify(pizza));
  };

  const setFilling = (filling) => {
    Object.assign(pizza, { filling });

    localStorage.setItem("@pizzaria_stoom", JSON.stringify(pizza));
  };

  const clearPizza = useCallback(() => {
    localStorage.removeItem("@pizzaria_stoom");

    setPizza({});
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        clearPizza,
        setPasta,
        setSize,
        setFilling,
        pizza,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
