import React from 'react';
import Router from 'next/router';
import GoBack from '../../../public/GoBack';
import { FooterWrapper } from './FooterWrapper';

export const MainLayout = ({
  children,
  headerText,
  withHeaderBorder = false,
  withGoBackButton = false,
  withCloseButton = false,
  footer,
}) => {
  const goBack = () => {
    Router.back();
  };
  return (
    <main className='w-[100%] h-[100%] flex flex-col fade-in'>
      <header
        className='fixed-top w-[100%] h-[67px] font-weight-normal flex justify-center items-center text-[20px] text-center'
        style={{
          borderBottom: `${withHeaderBorder ? '1px solid #BDBDBD' : 'none'}`,
          zIndex: '1',
          background: '#fff',
        }}
      >
        {withGoBackButton && (
          <button type='button' className='absolute left-[28px]' onClick={goBack}>
            <GoBack />
          </button>
        )}
        <p
          style={{
            width: '200px',
            lineHeight: '25px',
          }}
        >
          {headerText}
        </p>
        {withCloseButton && <></>}
      </header>
      <div className='pt-[67px]'>{children}</div>
      <FooterWrapper>{footer}</FooterWrapper>
    </main>
  );
};
