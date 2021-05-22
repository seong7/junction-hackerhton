import { useEffect, useState } from 'react';
import { MainLayout } from '../src/components/Layout/MainLayout';
import { Button } from '../src/elements/Button/Button';
import axios from 'axios';
import { baseURL } from './api/base';
import Ellipse from '../public/Ellipse';
import BusIcon from '../public/BusIcon';

const positions = () => {
  const [data, setData] = useState(null);
  const [next, setNext] = useState({ name: '', id: '' });
  const [isModalVisible, setIsModalVisidle] = useState(false);

  const setTime = () => {
    setInterval(() => {
      getRouteData();
    }, 1000);
  };

  const setNextStation = (data) => {
    const index = data.findIndex((value) => {
      if (value.currentLocation === true) {
        return value;
      } else {
        return;
      }
    });
    console.log(index);
    setNext(data[index + 1]);
  };

  const getRouteData = async () => {
    const token = localStorage.getItem('jwt');
    const { data } = await axios.get(`${baseURL}/bus/location/1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(data);
    setNextStation(data);
  };

  const handleModal = async (value) => {
    handleChangeModalVisible(value);
  };

  const handleGetOff = async () => {
    const token = localStorage.getItem('jwt');
    const res = await axios.delete(`${baseURL}/bus/1/getOff`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200 || res.status === 201) {
      location.href = '/evaluation';
    }
  };

  const handleChangeModalVisible = (value) => {
    setIsModalVisidle(value);
  };

  useEffect(async () => {
    document.querySelector('header').style.background = '#fff';
    getRouteData();
    setTime();
  }, []);

  return (
    <MainLayout
      withHeaderBorder
      headerText='643'
      footer={
        <>
          <Button type='button' text='이번에 내려요!' onClick={() => handleModal(true)} />
        </>
      }
    >
      {data &&
        data.length > 0 &&
        data.map((el) => (
          <div
            style={{
              position: 'relative',
              marginLeft: '30px',
              padding: '15px 0 15px 15px',
              fontWeight: 600,
              borderBottom: ' 1px solid #BDBDBD',
              borderLeft: '2px solid #316DCA',
            }}
            key={el.id}
            data-current={el.currentLocation}
          >
            {
              <div
                style={{
                  position: 'absolute',
                  left: '-27px',
                  display: el.currentLocation ? '' : 'none',
                }}
              >
                <BusIcon color='blue' />
              </div>
            }
            {
              <div
                style={{
                  position: 'absolute',
                  left: '-9px',
                  display: el.currentLocation ? '' : 'none',
                }}
              >
                <Ellipse />
              </div>
            }
            {el.name}
          </div>
        ))}
      <div
        className='fade-in-fast'
        style={{
          position: 'fixed',
          bottom: 0,
          zIndex: 10,
          height: '40%',
          width: '100%',
          display: isModalVisible ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#fff',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          boxShadow: '0px -3px 28px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <span style={{ color: '#256B93', textAlign: 'center', fontSize: '22px' }}>
            {`${next.name}에서`}
            <br />
            {'내리실 건가요?'}
          </span>
          <span style={{ color: '#256B93', fontSize: '16px', marginTop: '40px' }}>
            정확한 정보를 기사님께 전달드릴게요!
          </span>
        </div>
        <div
          style={{ display: 'flex', marginBottom: '40px', width: '100%', justifyContent: 'center' }}
        >
          <button
            style={{
              width: '40%',
              border: '3px solid #42B6F8',
              height: '57px',
              borderRadius: '10px',
              fontSize: '20px',
              color: '#42B6F8',
              margin: '0 7px',
            }}
            onClick={() => handleModal(false)}
          >
            아니오
          </button>
          <button
            style={{
              width: '40%',
              background: '#42B6F8',
              height: '57px',
              borderRadius: '10px',
              fontSize: '20px',
              color: '#fff',
              margin: '0 7px',
            }}
            onClick={handleGetOff}
          >
            네
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default positions;
