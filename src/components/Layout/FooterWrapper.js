import React from 'react';

export const FooterWrapper = ({ children }) => {
  console.log();
  return (
    <footer className='absolute bottom-0 w-[100%] flex flex-col items-center pb-[20px] fade-in'>
      <div className='w-[291px]'>{children}</div>
    </footer>
  );
};
