import React, { createContext, useCallback, useEffect, useState } from 'react';
import { WebSocket } from 'nextjs-websocket';

export const WebsocketContext = createContext({});

const WebSocketProvider = ({ children }) => {
  const [data, setData] = useState();

  const handleOnMessage = useCallback((data) => {
    console.log(data);
  }, []);

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
