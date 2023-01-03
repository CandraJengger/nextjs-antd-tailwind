import { SizeType } from 'antd/lib/config-provider/SizeContext';
import React from 'react';

type DefaultButtonProps = {
  type?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'ghost';
  text: string;
  htmlType?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
  className?: string;
  block?: boolean;
  size?: SizeType;
};

export default DefaultButtonProps;
