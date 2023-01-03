import type { NextPage } from 'next';
import Head from 'next/head';
import {
  ButtonSection,
  Title,
  InputSection,
  SwitchSection,
  ModalSection
} from '../components';

const Template: NextPage = () => {
  return (
    <>
      <Head>
        <title>Antd with Tailwindcss</title>
      </Head>

      <main className="p-4 md:p-11">
        <Title type="title-content" text="NextJS-Antd-Tailwindcss" />
        <Title type="title-subsection" text="NextJS-Antd-Tailwindcss" />

        <ButtonSection />

        <InputSection />

        <SwitchSection />

        <ModalSection />
      </main>
    </>
  );
};

export default Template;
