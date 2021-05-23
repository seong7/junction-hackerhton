import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MainLayout } from '../src/components/Layout/MainLayout';
import { baseURL } from './api/base';
import BusIcon from '../public/BusIcon';
import Ellipse from '../public/Ellipse';
import { DriverModal } from '../src/components/Layout/DriverModal';
import { WebsocketContext } from '../src/context/websocketContext/WebSocketContex';

const Driver = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const websocketContext = useContext(WebsocketContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (websocketContext.data !== undefined) {
      setIsModalVisible(true);
    }
  }, [websocketContext.data]);

  const getRouteData = async () => {
    const token = localStorage.getItem('jwt');
    const { data } = await axios.get(`${baseURL}/busdriver`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(data);
  };

  useEffect(async () => {
    const p = document.querySelector('header > p');
    document.querySelector('header').style.background = '#fff';
    if (p) {
      p.style.textAlign = 'center';
    }
    getRouteData();
  }, []);

  return (
    <div style={{ paddingBottom: '20px' }}>
      {isModalVisible && (
        <DriverModal setModalVisible={setIsModalVisible} data={websocketContext.data} />
      )}
      <MainLayout withHeaderBorder headerText='641'>
        {data &&
          data.length > 0 &&
          data.map((el) => (
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'space-between',
                marginLeft: '30px',
                padding: '25px 35px 25px 25px',
                fontWeight: 600,
                borderBottom: ' 1px solid #BDBDBD',
                borderLeft: '2px solid #316DCA',
              }}
              key={el.id}
              data-current={el.currentLocation}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '-27px',
                  display: el.currentLocation ? '' : 'none',
                }}
              >
                <BusIcon color='blue' />
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '-9px',
                  display: el.currentLocation ? '' : 'none',
                }}
              >
                <Ellipse />
              </div>
              {el.name}
              <div
                style={{
                  width: '40%',
                  display: 'flex',
                  alignItems: 'flex-end',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                  <span style={{ color: '#42B6F8', fontSize: '12px' }}>승차</span>
                  <div style={{ display: 'flex' }}>
                    <img src='/blind.png' />
                    <span>{`${el.blindOn}명`}</span>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <img src='/wheechair.png' />
                    <span style={{ whiteSpace: 'nowrap' }}>{`${el.wheelchairOn}명`}</span>
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    marginTop: '7px',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <span style={{ color: '#FF5858', fontSize: '12px' }}>하차</span>
                  <div style={{ display: 'flex' }}>
                    <img src='/blind.png' />
                    <span style={{ display: 'flex' }}>{`${el.blindOn}명`}</span>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <img src='/wheechair.png' />
                    <span
                      style={{ display: 'flex', whiteSpace: 'nowrap' }}
                    >{`${el.wheelchairOn}명`}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </MainLayout>
    </div>
  );
};

export default Driver;
