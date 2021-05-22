import React from 'react';
import Router from 'next/router';
import GoBack from '../../../public/GoBack';

export const MainLayout = ({ children, headerText, withGoBackButton }) => {
  const goBack = () => {
    Router.back();
  };
  return (
    <main className='w-[100%] h-[100%] flex flex-col fade-in'>
      <header className='fixed-top w-[100%] h-[67px] font-weight-normal flex justify-center items-center text-[20px]'>
        {withGoBackButton && (
          <button type='button' className='absolute left-[28px]' onClick={goBack}>
            <GoBack />
          </button>
        )}
        {headerText}
      </header>
      <div className='pt-[67px]'>{children}</div>
    </main>
  );
};
