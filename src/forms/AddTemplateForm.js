import { Button, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

export default function AddTemplateForm() {
  return (
    <div className='p-1 lg:p-6'>
        <Form layout='vertical'>
            <Form.Item label="Subject">
                <Input />
            </Form.Item>
            <Form.Item label="Message">
                <TextArea rows={9} />
            </Form.Item>
            <Button className='float-right'>Add Template</Button>
        </Form>
    </div>
  )
}
