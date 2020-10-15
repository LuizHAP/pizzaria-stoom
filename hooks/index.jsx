import React from "react";
import { PizzaProvider } from "./pizza";
import { PointsProvider } from "./points";

const Provider = ({ children }) => {
  return (
    <PointsProvider>
      <PizzaProvider>{children}</PizzaProvider>
    </PointsProvider>
  );
};

export default Provider;
