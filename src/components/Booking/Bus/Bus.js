import React, { useContext } from 'react';
import { MainLayout } from '../../Layout/MainLayout';
import { Button } from '../../../elements/Button/Button';
import { BusContext } from '../../../context/busContext/BusContext';
import BusIcon from '../../../../public/BusIcon';

export const Bus = () => {
  const iconColors = ['blue', 'green', 'red', 'yellow'];
  const busContext = useContext(BusContext);
  console.log(busContext.station);
  return (
    <MainLayout
      headerText={busContext.station}
      withHeaderBorder
      withGoBackButton
      footer={
        <>
          <Button type='button' text='탑승하기' />
        </>
      }
    >
      <div className=''>test</div>
    </MainLayout>
  );
};
