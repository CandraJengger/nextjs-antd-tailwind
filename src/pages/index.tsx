import type { NextPage } from 'next';
import Head from 'next/head';
import {
  SectionButton,
  Title,
  SectionInput,
  SectionSwitch
} from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Antd with Tailwindcss</title>
      </Head>

      <main className="p-4 md:p-11">
        <Title type="title-content" text="NextJS-Antd-Tailwindcss" />

        <SectionButton />

        <SectionInput />

        <SectionSwitch />

        <section>
          <Title type="title-section" text="Modal" />
        </section>
      </main>
    </>
  );
};

export default Home;
