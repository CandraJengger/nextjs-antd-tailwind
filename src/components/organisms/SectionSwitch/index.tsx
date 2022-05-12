import { Form, Switch } from 'antd';
import React from 'react';
import { SectionWrapper } from '../../moleculs';

const SectionSwitch = () => {
  return (
    <SectionWrapper title="Switch">
      {/* Default */}
      <Switch />

      {/* with form */}
      <Form>
        <Form.Item label="Label">
          <Switch />
        </Form.Item>
      </Form>
    </SectionWrapper>
  );
};

export default SectionSwitch;
