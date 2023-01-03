import { Row, Col, Form, Input, Checkbox } from 'antd';
import Link from 'next/link';
import { Button } from 'src/components/atoms';
import { PRIVACY_POLICI_URL, TERM_URL } from 'src/config';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";


const RegisterForm = () => {
  return (
    <>
      <div className="bg-secondary shadow-md p-9 py-10 rounded-lg">
        <Row gutter={[24, 24]}>
          <Col xs={24}>
            <h3 className="text-dark font-semibold text-center text-lg">
              Sign up
            </h3>
          </Col>
          <Col xs={24}>
            <Form>
              <Form.Item>
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <PhoneInput
                  country={'id'}
                  placeholder="Phone Number"
                  onChange={e => {}}
                  containerClass={`ant-input ${
                    false ? 'border-warning' : ''
                  }`}
                  inputProps={{
                    name: 'phone',
                    required: true
                  }}
                  inputClass="w-full h-full border-0"
                  inputStyle={{
                    boxShadow: 'none'
                  }}
                  buttonClass="bg-white border-0"
                  countryCodeEditable={false}
                />
              </Form.Item>
              <Form.Item>
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item className=" mb-8">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox defaultChecked={false}>
                    {' '}
                    Agree to{' '}
                    <a href={TERM_URL} target="_blank" rel="noreferrer" className='text-primary'>
                      terms
                    </a>{' '}
                    and{' '}
                    <a
                      href={PRIVACY_POLICI_URL}
                      target="_blank"
                      rel="noreferrer" className='text-primary'
                    >
                      conditions
                    </a>
                  </Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <div className="flex justify-center">
                  <Button
                    text="Create Account"
                    type="primary"
                    size="middle"
                    block
                  />
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>

      <div className="flex justify-end mt-4">
        <small className="text-white">
          Already have account?{' '}
          <Link href="/login">
            <a id="signin-link" className="text-white">
              <b>Sign In</b>
            </a>
          </Link>
        </small>
      </div>
    </>
  );
};

export default RegisterForm;
