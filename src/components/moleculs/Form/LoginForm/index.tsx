import { Row, Col, Form, Input, Checkbox } from 'antd';
import Link from 'next/link';
import { Button } from 'src/components/atoms';

const LoginForm = () => {
  return (
    <>
      <div className="bg-secondary shadow-md p-9 py-10 rounded-lg">
        <Row gutter={[24, 24]}>
          <Col xs={24}>
            <h3 className="text-dark font-semibold text-center text-lg">
              Sign in
            </h3>
          </Col>
          <Col xs={24}>
            <Form>
              <Form.Item>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item className=" mb-8">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox defaultChecked={false}>Ingat saya</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <div className="flex justify-center">
                  <Button text="Sign In" type="primary" size="large" />
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>

      <div className="flex justify-between mt-4">
        <Link href="/auth/forgot-password">
          <a id="forget-password-link" className="text-white">
            <small>Lupa kata sandi?</small>
          </a>
        </Link>
        <Link href="/register">
          <a id="register-link" className="text-white">
            <small>Buat akun baru</small>
          </a>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
