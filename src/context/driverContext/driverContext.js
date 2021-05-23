import React, { createContext, useState } from 'react';

export const DriverContext = createContext({});

const DriverProvider = ({ children }) => {
  const [driverId, setDriverId] = useState();

  const changeDriverId = (id) => {
    console.log('changeDriverId : ', id);
    setDriverId(id);
  };

  const store = {
    driverId,
    changeDriverId,
  };

  return <DriverContext.Provider value={store}>{children}</DriverContext.Provider>;
};
export default DriverProvider;
