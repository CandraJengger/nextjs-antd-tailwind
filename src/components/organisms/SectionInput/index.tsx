import { Col, Form, Input, Row } from 'antd';
import React from 'react';
import { SectionWrapper } from '../../moleculs';

const SectionInput = () => {
  return (
    <SectionWrapper title="Input">
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Row gutter={24}>
            <Col xs={24}>
              {/* Default */}
              <Input className="mb-4" placeholder="default" />

              {/* Borderless */}
              <Input
                className="mb-4"
                bordered={false}
                placeholder="borderless"
              />

              {/* Textarea */}
              <Input.TextArea
                className="mb-4"
                rows={4}
                placeholder="textarea"
              />

              {/* Password */}
              <Input.Password className="mb-4" placeholder="Password" />

              {/* Status */}
              <Input
                className="mb-4"
                placeholder="Error status"
                status="error"
              />
              <Input
                className="mb-4"
                placeholder="Warning status"
                status="warning"
              />
            </Col>
            <Col xs={24}>
              <Form layout="vertical">
                <Form.Item label="Label">
                  <Input placeholder="With Label" />
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default SectionInput;
