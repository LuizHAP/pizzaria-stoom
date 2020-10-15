import React, { createContext, useContext, useCallback, useState } from "react";

const PointsContext = createContext({});

export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(0);

  const clearPoints = useCallback(() => {
    setPoints(0);
  }, []);

  return (
    <PointsContext.Provider
      value={{
        setPoints,
        clearPoints,
        points,
      }}
    >
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = () => useContext(PointsContext);
