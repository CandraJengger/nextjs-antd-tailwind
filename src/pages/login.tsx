import Head from 'next/head';
import { AuthLayout } from 'src/layouts';
import { AuthWrapper, LoginForm } from '../components';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Widya Wicara</title>
      </Head>

      <AuthWrapper
        title="Welcome!"
        subtitle="Silakkan login atau daftar untuk menikmati layanan dari Widya Wicara."
      >
        <LoginForm />
      </AuthWrapper>
    </>
  );
};

Login.layout = AuthLayout;

export default Login;
