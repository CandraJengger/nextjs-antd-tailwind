import Head from 'next/head';
import { AuthLayout } from 'src/layouts';
import { Title } from '../components';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Widya Wicara</title>
      </Head>

      <main className="p-4 md:p-11">
        <Title type="title-content" text="Login" />
      </main>
    </>
  );
};

Login.layout = AuthLayout;

export default Login;
