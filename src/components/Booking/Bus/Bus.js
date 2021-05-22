import React, { useCallback, useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { MainLayout } from '../../Layout/MainLayout';
import { BottomModal } from '../../Layout/BottomModal';
import { Button } from '../../../elements/Button/Button';
import { BusContext } from '../../../context/busContext/BusContext';
import { BusList } from './BusList/BusList';
import config from '../../../../config/config';

export const Bus = () => {
  const [selectedBusId, setSelectedBusId] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const busContext = useContext(BusContext);
  useEffect(() => {
    busContext.startGettingData();
    // componentWillUnmount
    return () => {
      busContext.stopGettingData();
    };
  }, []);
  console.log(busContext.station);

  const openConfirmModal = useCallback(() => {
    setButtonClicked(true);
    setTimeout(() => {
      setIsModalVisible(true);
    }, 2000);
    setTimeout(() => {
      setButtonClicked(false);
    }, 3000);
  }, []);

  const bookTheBus = useCallback(async () => {
    const jwt = window.localStorage.getItem('jwt');
    if (jwt === null) await Router.replace('/');
    // console.log(jwt);
    // console.log('selectedBusId ::::', selectedBusId);

    try {
      const res = await axios.post(
        `${config.BASEURL}/api/bus/${selectedBusId}/getOn`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      );
      // console.log(res);
      Router.push('/positions');
    } catch (e) {
      console.error(e);
    }
  }, [selectedBusId]);

  return (
    <MainLayout
      headerText={busContext.station}
      withHeaderBorder
      withGoBackButton
      footer={
        <>
          <Button
            type='button'
            text='탑승하기'
            disabled={selectedBusId === undefined || buttonClicked}
            onClick={openConfirmModal}
          />
        </>
      }
    >
      <div className=''>
        {busContext.bus.length > 0 && (
          <BusList
            busList={busContext.bus}
            handleSubmit={openConfirmModal}
            selectedBusId={selectedBusId}
            setSelectedBusId={setSelectedBusId}
          />
        )}
      </div>
      {isModalVisible && (
        <BottomModal
          title='무사히 탑승하셨나요?'
          contentText={['아래 버튼을 누르시면', '무사히 내릴 때까지 안내해드릴게요.']}
          submitText='네'
          cancelText='아니요'
          onCancel={() => setIsModalVisible(false)}
          onSubmit={bookTheBus}
          setModalVisible={setIsModalVisible}
        />
      )}
    </MainLayout>
  );
};
