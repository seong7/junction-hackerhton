import Head from 'next/head';
import { useEffect, useState } from 'react';
import { HomePage } from '../src/components/HomePage/HomePage';
import SignIn from './sign-in';

export default function Home() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setToken(token);
  });
  return !token ? (
    <SignIn />
  ) : (
    <>
      <div>
        <main>
          <HomePage />
        </main>
      </div>
    </>
  );
}
