import React, { createContext, useState } from 'react';

export const BusContext = createContext({});

const BusProvider = ({ children }) => {
  const [station, setStation] = useState('');
  const [bus, setBus] = useState([]);
  const getBusFromServer = async () => {};
  const store = {
    station,
    setStation,
    bus,
    setBus,
    getBusFromServer,
  };

  return <BusContext.Provider value={store}>{children}</BusContext.Provider>;
};

export default BusProvider;
