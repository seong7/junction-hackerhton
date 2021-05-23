import React, { createContext, useState } from 'react';

export const DriverContext = createContext({});

const DriverProvider = ({ children }) => {
  const [driverId, setDriverId] = useState();

  const store = {
    driverId,
    setDriverId,
  };

  return <DriverContext.Provider value={store}>{children}</DriverContext.Provider>;
};
export default DriverProvider;
