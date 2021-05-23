import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import OurBusText from '../public/OurBusText';
import Line from '../public/Line';
import { baseURL } from './api/base';
import MainBusIcon from '../public/MainBusIcon';
import { DriverContext } from '../src/context/driverContext/driverContext';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const driverContext = useContext(DriverContext);

  const handleChangeEmail = (value) => setForm({ ...form, email: value });
  const handleChangePassword = (value) => setForm({ ...form, password: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('email', form.email);
    params.append('password', form.password);
    try {
      const res = await axios.post(`${baseURL}/user/login`, params);
      localStorage.setItem('jwt', res.data.jwt);
      if (res.status === 200 || res.status === 201) {
        if (res.data.role === 'COMPANY') {
          // console.log('login - driverID : ', res.data.driverId);
          // driverContext.setDriverId(res.data.driverId);
          // console.log('login- set 이후 :: ', driverContext.driverId);
          window.localStorage.setItem('driverId', res.data.driverId);
          Router.replace('/driver');
        } else {
          // driverContext.setDriverId(' ');
          Router.replace('/');
        }
      }
    } catch (error) {
      alert(error.response.data.message);
      console.dir(error);
    }
  };

  return (
    <div
      className='form-container'
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <form
        className='form'
        style={{
          display: 'flex',
          height: '70vh',
          alignContent: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          marginBottom: '40px',
        }}
      >
        <div
          className='form__input-container'
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
              <div>
                <OurBusText />
              </div>
              <div style={{ marginLeft: '5px' }}>
                <MainBusIcon />
              </div>
            </div>
            <div style={{ position: 'relative', top: '-9px', zIndex: '-1' }}>
              <Line />
            </div>
          </div>
          <h1
            className='form__title'
            style={{
              color: '#256B93',
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '30px',
              textAlign: 'center',
              lineHeight: '1.4',
            }}
          >
            함께 타는 우리의 버스
            <br />
            같이 만들어가요
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <input
              className='user_id placeholder'
              placeholder='아이디'
              style={{
                border: '3px solid #42B6F8',
                borderRadius: '10px',
                width: '291px',
                height: '57px',
                marginBottom: '10px',
                paddingLeft: '10px',
                fontSize: '20px',
              }}
              onChange={(e) => handleChangeEmail(e.target.value)}
            />
            <input
              className='password placeholder'
              placeholder='비밀번호'
              style={{
                border: '3px solid #42B6F8',
                borderRadius: '10px',
                width: '291px',
                height: '57px',
                paddingLeft: '10px',
                fontSize: '20px',
              }}
              type='password'
              onChange={(e) => handleChangePassword(e.target.value)}
            />
          </div>
        </div>

        <div
          className='form__button-container'
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <button
            className='form_sign-in'
            style={{
              width: '291px',
              height: '57px',
              background: '#42B6F8',
              borderRadius: '10px',
              fontSize: '22px',
              color: '#fff',
              marginBottom: '20px',
            }}
            onClick={(e) => handleSubmit(e)}
          >
            로그인
          </button>
          <button
            className='form_sign-up'
            style={{
              width: '291px',
              height: '57px',
              background: '#42B6F8',
              borderRadius: '10px',
              fontSize: '22px',
              color: '#fff',
            }}
            onClick={(e) => {
              e.preventDefault();
              Router.push('/sign-up');
            }}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
