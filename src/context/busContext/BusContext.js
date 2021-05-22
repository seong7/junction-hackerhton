import React, { createContext, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import config from '../../../config/config';
import Timer from '../../utills/Timer';

export const BusContext = createContext({});

const BusProvider = ({ children }) => {
  const [station, setStation] = useState('');
  const [bus, setBus] = useState([]);

  const getBusFromServer = async () => {
    console.log('getBusFromServer Called !!');
    const jwt = window.localStorage.getItem('jwt');
    if (jwt && station) {
      try {
        const bus = await axios.get(`${config.BASEURL}/api/bus?stationName=${station}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        console.log(bus);
        setBus(bus.data);
      } catch (e) {
        console.error(e);
      }
    } else Router.replace('/');
  };

  const timer = new Timer(getBusFromServer, 60000);

  const startGettingData = () => {
    // console.log('start');
    timer.start();
  };
  const stopGettingData = () => {
    // alert('stop');
    timer.stop();
    setBus([]);
  };

  const store = {
    station,
    setStation,
    bus,
    setBus,
    startGettingData,
    stopGettingData,
  };

  return <BusContext.Provider value={store}>{children}</BusContext.Provider>;
};

export default BusProvider;
