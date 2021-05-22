import React, { useCallback, useRef, useState } from 'react';
import { Button } from '../../elements/Button/Button';
import { AutoComplete } from './AutoComplete/AutoComplete';
import { FooterWrapper } from '../Layout/FooterWrapper';

export const Booking = () => {
  const [text, setText] = useState('');
  const [shouldShowAutocomplete, setShouldShowAutocomplete] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const changeText = (e) => {
    setText(e.target.value);
    if (!shouldShowAutocomplete) {
      setShouldShowAutocomplete(true);
      setIsSelected(false);
    } else if (e.target.value === '') setShouldShowAutocomplete(false);
  };

  const handleClickAutocomplete = useCallback((e) => {
    console.log(e.target.innerText);
    setText(e.target.innerText);
    setShouldShowAutocomplete(false);
    setIsSelected(true);
  }, []);

  return (
    <>
      <main className='w-[100%] h-[100%] flex justify-center items-center fade-in'>
        <form className='flex flex-col justify-center items-center w-[291px] h-[100%]'>
          <label
            htmlFor='bus-stop-input'
            style={{ color: '#256B93', fontSize: '20px', position: 'relative', top: '-50px' }}
          >
            출발하는 정류장을 찾아주세요.
            <input
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
              placeholder='어디서 타시나요?'
              value={text}
              onChange={changeText}
              autoComplete='off'
            />
            {shouldShowAutocomplete && (
              <AutoComplete typedText={text} onClick={handleClickAutocomplete} />
            )}
          </label>
          <FooterWrapper>
            <Button
              type='submit'
              text='검색'
              onClick={handleSubmit}
              className='fade-in'
              disabled={!isSelected}
            />
          </FooterWrapper>
        </form>
      </main>
    </>
  );
};
