import React from 'react';
import { PizzaProvider } from './pizza';

const Provider = ({ children }) => {
  return <PizzaProvider>{children}</PizzaProvider>;
};

export default Provider;