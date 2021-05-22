import Head from 'next/head';
import { HomePage } from '../src/components/HomePage/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hackathon</title>
      </Head>
      <div>
        <main>
          <HomePage />
        </main>
      </div>
    </>
  );
}
