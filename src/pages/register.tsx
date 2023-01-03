import Head from 'next/head';
import { AuthLayout } from 'src/layouts';
import { AuthWrapper, RegisterForm, Title } from '../components';

const Register = () => {
  return (
    <>
      <Head>
        <title>Registrasi | Widya Wicara</title>
      </Head>

      <AuthWrapper
        title="Create an account"
        subtitle="Silakkan daftar untuk menikmati layanan dari Widya Wicara."
      >
        <RegisterForm />
      </AuthWrapper>
    </>
  );
};

Register.layout = AuthLayout;

export default Register;
