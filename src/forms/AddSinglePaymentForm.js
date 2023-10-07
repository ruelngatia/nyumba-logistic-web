import { Form, Input, InputNumber } from 'antd'
import React from 'react'

export default function AddSinglePaymentForm() {
  return (
    <div>
        <Form layout='vertical'>
            <Form.Item label="Room number/ Account number">
                <Input />
            </Form.Item>
            <Form.Item label="Amount">
                <InputNumber style={{width: 250}} precision={2} prefix="KSH"/>
            </Form.Item>
        </Form>
    </div>
  )
}
