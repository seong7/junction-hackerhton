import Head from 'next/head';
import { HomePage } from '../src/components/HomePage/HomePage';

export default function Home() {
  return (
    <>
      <div>
        <main>
          <HomePage />
        </main>
      </div>
    </>
  );
}
