import Head from 'next/head';
import { useEffect, useState } from 'react';
import SignIn from './sign-in';
import Booking from './booking/index';

export default function Home() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setToken(token);
  });
  return !token ? <SignIn /> : <Booking />;
}
