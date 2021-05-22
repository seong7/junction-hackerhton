import React, { useCallback, useRef } from 'react';
import { Button } from '../../elements/Button/Button';

export const Booking = () => {
  const inputRef = useRef();
  console.log();
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  });
  return (
    <>
      <div className='w-[100vw] h-[100[vh] flex justify-center items-center'>
        <form className='felx justify-center items-center w-[291px] h-[100%]'>
          <label htmlFor='bus-stop-input' style={{ color: '#256B93', fontSize: '20px' }}>
            출발하는 정류장을 찾아주세요.
            <input
              ref={inputRef}
              id='bus-stop-input'
              style={{
                color: '#256B93',
                width: '100%',
                height: '57px',
                border: '3px solid #42B6F8',
                boxSizing: 'border-box',
                borderRadius: '10px',
                marginTop: '14px',
                padding: '10px',
              }}
            />
          </label>
          <Button type='submit' text='검색' onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
};
