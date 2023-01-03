import Head from 'next/head';
import { AuthLayout } from 'src/layouts';
import { Title } from '../components';

const Register = () => {
  return (
    <>
      <Head>
        <title>Registrasi | Widya Wicara</title>
      </Head>

      <main className="p-4 md:p-11">
        <Title type="title-content" text="Registrasi" />
      </main>
    </>
  );
};

Register.layout = AuthLayout;

export default Register;
