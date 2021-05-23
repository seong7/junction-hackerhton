import React, { useContext, useState } from 'react';
import { Booking } from '../../src/components/Booking';
import { DriverModal } from '../../src/components/Layout/DriverModal';
import { WebsocketContext } from '../../src/context/websocketContext/WebSocketContex';

export default function BookingPage() {
  const [isVisible, setIsVisible] = useState(true);
  const websocketContext = useContext(WebsocketContext);
  return (
    <>
      {isVisible && <DriverModal setModalVisible={setIsVisible} message={websocketContext.data} />}
      <Booking />
    </>
  );
}
