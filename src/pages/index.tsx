import type { NextPage } from 'next';
import Head from 'next/head';
import { Title } from '../components/atoms';

const Home: NextPage = () => {
  return (
   <>
    <Head>
      <title>Antd with Tailwindcss</title>
    </Head>

    <main className='p-4 md:p-11'>
      <Title type='title-content' text="NextJS-Antd-Tailwindcss" />

      <section>
        <Title type='title-section' text="Button" />
      </section>

      <section>
        <Title type='title-section' text="Input" />
      </section>

      <section>
        <Title type='title-section' text="Switch" />
      </section>

      <section>
        <Title type='title-section' text="Modal" />
      </section>
    </main>
   </>
  );
};

export default Home;
