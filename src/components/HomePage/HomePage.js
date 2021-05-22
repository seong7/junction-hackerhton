import React from 'react';

export const HomePage = () => {
  const handleClick = () => {
    console.log('로그인 버튼');
  };
  return (
    <div className='w-[100vw] h-[100vh]'>
      <header className='w-[auto] flex justify-center items-center'>
        <h1>Logo</h1>
      </header>
      <div className='w-[100%] flex justify-center items-center'>
        <button type='button' className='w-[10rem]' onClick={handleClick}>
          로그인하기
        </button>
      </div>
    </div>
  );
};
