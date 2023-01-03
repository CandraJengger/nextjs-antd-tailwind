import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IloWidyaBlue } from 'src/assets';
import { RenderIf } from 'src/components/atoms';

import Props from './LandingNavbar.props';

const LandingNavbar: FC<Props> = ({ withLinks = true }) => {
  return (
    <Header className=" py-3 h-min mb-6 bg-transparent">
      <div className="container mx-auto px-5">
        <div className="logo">
          <Link href="/">
            <a className="flex">
              <Image
                src={IloWidyaBlue.src}
                width={257}
                height={86}
                objectFit="contain"
                alt="logo widya"
              />
            </a>
          </Link>
        </div>

        <RenderIf isTrue={withLinks}>
          <Menu
            className="bg-transparent"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`
            }))}
          />
        </RenderIf>
      </div>
    </Header>
  );
};

export default LandingNavbar;
