import React, { useEffect, useRef, useState } from 'react';

export const DriverModal = ({ setModalVisible, data }) => {
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

  // const fixedText = message
  return (
    <div
      className={`fixed-top w-[95%] p-[20px]  ${fade}`}
      style={{
        margin: '5px auto',
        border: '1px solid #4F4F4F',
        borderRadius: '10px',
        boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.25)',
        zIndex: '30',
        background: '#fff',
      }}
      onClick={handleClick}
    >
      <p
        style={{
          color: 'black',
          fontSize: '20px',
          lineHeight: '35px',
        }}
      >
        <span style={{ color: 'rgb(28, 144, 247' + ')' }}>{data.name}</span> 에서
        <br />
        {data.disabledType === 'WHEELCHAIR' ? '휠체어 이용자' : '시각장애인'} 1 분이{' '}
        <span style={{ color: '#ff7f7f' }}>{data.type}</span> 하십니다.
      </p>
      <p
        style={{
          marginTop: '10px',
          fontSize: '16px',
          lineHeight: '30px',
        }}
      >
        조심히 {data.type} 할 수 있도록 조금만 기다려주세요.
      </p>
    </div>
  );
};
