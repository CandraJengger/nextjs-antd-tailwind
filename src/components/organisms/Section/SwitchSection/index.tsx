import { Form, Switch } from 'antd';
import React from 'react';
import { SectionWrapper } from '../../../moleculs';

const SwitchSection = () => {
  return (
    <SectionWrapper title="Switch">
      {/* Default */}
      <Switch />

      {/* with form */}
      <Form>
        <Form.Item label="Label">
          <Switch size="small" />
        </Form.Item>
      </Form>
    </SectionWrapper>
  );
};

export default SwitchSection;
