import React from 'react';
import { Modal as AModal } from 'antd';
import {Props} from './modal.props'

const Modal: React.FC<Props> = ({
  visible,
  onToggle,
  title,
  children,
  width,
  centered = false
}) => {
  return (
    <AModal
      footer={false}
      visible={visible}
      onCancel={onToggle}
      centered={centered}
      width={width}
    >
      <div className="border-b pb-2 border-b-grey3 mb-6">
        <h2 className=" text-xl font-bold">{title}</h2>
      </div>
      <div>{children}</div>
    </AModal>
  );
};

export default Modal;
