import React, { createContext, useCallback, useContext, useState } from 'react';
import { WebSocket } from 'nextjs-websocket';
import { DriverContext } from '../driverContext/driverContext';
import config from '../../../config/config';

export const WebsocketContext = createContext({});

const WebSocketProvider = ({ children }) => {
  const [data, setData] = useState();
  // const driverContext = useContext(DriverContext);

  // console.log('websocket Provider :: ', driverContext.driverId);

  const handleOnMessage = async (data) => {
    try {
      if (data) {
        const res = await JSON.parse(data);
        // console.log('driverContext.driverId ::', driverContext.driverId);
        const driverId = window.localStorage.getItem('driverId');

        if (Number(driverId) === res.driverId && res.driverId !== undefined) {
          setData(res);
        }
      } else {
        console.log(' else : ', data);
      }
    } catch (e) {}
  };

  const store = {
    data,
  };

  return (
    <WebsocketContext.Provider value={store}>
      <WebSocket
        url={config.WS_URL}
        onMessage={handleOnMessage}
        onOpen={() => console.log('websocket connected !')}
      />
      {children}
    </WebsocketContext.Provider>
  );
};
export default WebSocketProvider;
