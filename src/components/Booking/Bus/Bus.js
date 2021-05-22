import React from 'react';
import { MainLayout } from '../../Layout/MainLayout';
import { FooterWrapper } from '../../Layout/FooterWrapper';
import { Button } from '../../../elements/Button/Button';

export const Bus = () => {
  console.log();
  return (
    <MainLayout headerText='낙성대역' withGoBackButton>
      <div className=''>내용</div>
      <FooterWrapper>
        <Button type='button' text='탑승하기' />
      </FooterWrapper>
    </MainLayout>
  );
};
