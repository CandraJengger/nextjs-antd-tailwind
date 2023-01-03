import Head from 'next/head';
import { AuthLayout } from 'src/layouts';
import { Title } from '../components';

const Landing = () => {
  return (
    <>
      <Head>
        <title>Affiliate | Widya Wicara</title>
      </Head>

      <main className="p-4 md:p-11">
        <Title type="title-content" text="NextJS-Antd-Tailwindcss" />
      </main>
    </>
  );
};

Landing.layout = AuthLayout;

export default Landing;
