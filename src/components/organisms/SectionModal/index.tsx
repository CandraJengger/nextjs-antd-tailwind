import { Form, Input } from 'antd'
import React, { useState } from 'react'
import { Button, Gap, Modal } from '../../atoms'
import { SectionWrapper } from '../../moleculs'

const SectionModal = () => {
  const [open, setOpen] = useState(false)
  return (
    <SectionWrapper title='Modal'>
      <Button text='Modal' className='mx-4' onClick={() => setOpen(true)} />
      <Modal title='Modal' visible={open} onToggle={() => setOpen(!open)}>
        <Form layout='vertical'>
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType="submit" text='Submit' />
            <Gap width={16} height={12} />
            <Button htmlType="button" text='Cancel' onClick={() => setOpen(false)} />
          </Form.Item>
        </Form>
      </Modal>
    </SectionWrapper>
  )
}

export default SectionModal