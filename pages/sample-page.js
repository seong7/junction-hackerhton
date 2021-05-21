import Head from 'next/head';
import { Sample } from '../src/components/Sample/Sample';

export default function Home() {
  return (
    <>
      <Head>
        <title>sample page</title>
      </Head>
      <div>
        <main>
          {/* BootStrap component - custom styling 하는 법? */}
          <Sample />
          {/* tailwind 참고 : https://tailwindcss.com/docs/just-in-time-mode#new-features  */}
          <div className='h-[600px] bg-[#0f0] text-red-700'>tailwind sample</div>
        </main>
      </div>
    </>
  );
}
