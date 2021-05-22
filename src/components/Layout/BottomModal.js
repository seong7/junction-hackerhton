import React from 'react';
import { Button } from '../../elements/Button/Button';

export const BottomModal = ({
  title,
  contentText,
  submitText,
  cancelText,
  onSubmit,
  onCancel,
  setModalVisible,
}) => (
  <div
    className='fixed-top w-[100%] h-[100%] fade-in'
    style={{ background: 'rgb(0 0 0 / 45%)' }}
    onClick={() => setModalVisible(false)}
  >
    <div
      className='absolute w-[100%] bottom-[0px] bg-[#fff] fade-in flex flex-col'
      style={{
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        boxShadow: '#00000036 0px -20px 28px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '80px',
          paddingBottom: '40px',
          paddingLeft: '30px',
          paddingRight: '30px',
          textAlign: 'center',
          color: '#256B93',
        }}
      >
        <p
          style={{
            fontSize: '30px',
          }}
        >
          {title}
        </p>
        <div
          style={{
            fontSize: '20px',
            marginTop: '21px',
            lineHeight: '30px',
          }}
        >
          {typeof contentText === 'string'
            ? contentText
            : contentText.map((c, i) => (
                <p key={i}>
                  <span>{c}</span>
                  <br />
                </p>
              ))}
        </div>
      </div>
      <div
        className='flex justify-center'
        style={{
          padding: '30px 0',
        }}
      >
        <Button type='button' size='sm' text={cancelText} onClick={onCancel} variant='outlined' />
        <Button
          type='button'
          className='ml-[20px]'
          size='sm'
          text={submitText}
          onClick={onSubmit}
        />
      </div>
    </div>
  </div>
);
