import React from 'react';
import { Button as AButton } from 'antd';
import { Props } from './button.props';

const Button: React.FC<Props> = ({
  type = 'default',
  text,
  htmlType = 'button',
  disabled = false,
  className,
  block = false,
  onClick,
  size = 'middle'
}) => {
  const getType = (): any => {
    if (type === 'default')
      return {
        type: 'default'
      };
    if (type === 'primary')
      return {
        type: 'primary'
      };
    if (type === 'danger')
      return {
        type: 'primary',
        danger: true
      };
    if (type === 'secondary')
      return {
        className: 'ant-btn-secondary'
      };
    if (type === 'success')
      return {
        className: 'ant-btn-success'
      };
    if (type === 'warning')
      return {
        className: 'ant-btn-warning'
      };
    if (type === 'ghost')
      return {
        ghost: true
      };
  };
  return (
    <AButton
      {...getType()}
      onClick={onClick}
      htmlType={htmlType}
      disabled={disabled}
      className={`${
        getType()?.className ? getType()?.className : ''
      } ${className}`}
      block={block}
      size={size}
    >
      {text}
    </AButton>
  );
};

export default Button;
