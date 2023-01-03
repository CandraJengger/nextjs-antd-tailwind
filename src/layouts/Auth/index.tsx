import { Layout, Menu } from 'antd';
import { Header, Content } from 'antd/lib/layout/layout';
import { FC } from 'react';
import { Button, CopyrightFooter, LandingNavbar } from 'src/components';
import { useBackgroundImage } from 'src/hooks';

const AuthLayout: FC<any> = ({ children }) => {
  useBackgroundImage();

  return (
    <>
      <Layout className="bg-transparent">
        <LandingNavbar withLinks={false} />
        <Content
          className="container mx-auto site-layout"
          style={{ padding: '0 50px', minHeight: '90vh' }}
        >
          <div className="flex justify-center items-center">{children}</div>
        </Content>
        <CopyrightFooter />
      </Layout>
    </>
  );
};

export default AuthLayout;