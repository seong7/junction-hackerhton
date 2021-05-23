import React, { createContext, useCallback, useContext, useState } from 'react';
import { WebSocket } from 'nextjs-websocket';
import { DriverContext } from '../driverContext/driverContext';

export const WebsocketContext = createContext({});

const WebSocketProvider = ({ children }) => {
  const [data, setData] = useState();
  const driverContext = useContext(DriverContext);

  const handleOnMessage = useCallback(
    (data) => {
      if (driverContext.driverId === data.driverId && data.driverId !== undefined) {
        setData(data);
        console.log('handleOnMessage:::', data, data.driverId);
      }
    },
    [driverContext.driverId],
  );

  const store = {
    data,
  };

  return (
    <WebsocketContext.Provider value={store}>
      <WebSocket
        url='ws://192.168.0.4:8080/'
        onMessage={handleOnMessage}
        onOpen={() => console.log('websocket connected !')}
      />
      {children}
    </WebsocketContext.Provider>
  );
};
export default WebSocketProvider;
