import React, { useEffect, useRef, useState } from 'react';

export const DriverModal = ({ setModalVisible, message }) => {
  const [fade, setFade] = useState('fade-in');
  useEffect(() => {
    setTimeout(() => {
      setFade('fade-out');
    }, 5000);
    setTimeout(() => {
      setModalVisible(false);
    }, 6000);
  }, []);
  const handleClick = () => {
    setModalVisible(false);
  };
  return (
    <div
      className={`fixed-top w-[95%] p-[20px] ${fade}`}
      style={{
        margin: '5px auto',
        border: '1px solid #4F4F4F',
        borderRadius: '10px',
        boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.25)',
      }}
      onClick={handleClick}
    >
      <p
        style={{
          color: 'black',
          fontSize: '25px',
          lineHeight: '35px',
        }}
      >
        {message}
      </p>
      <p
        style={{
          marginTop: '10px',
          fontSize: '20px',
          lineHeight: '30px',
        }}
      >
        조심히 승차 / 하차 할 수 있도록 조금만 기다려주세요.
      </p>
    </div>
  );
};
