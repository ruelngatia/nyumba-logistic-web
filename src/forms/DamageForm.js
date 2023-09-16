import { Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

export default function DamageForm() {
  return (
    <Form layout='vertical'>
        <Form.Item label="Damage">
            <Input/>
        </Form.Item>
        <Form.Item label="Amount">
            <Input/>
        </Form.Item>
        <Form.Item label="Description">
            <TextArea rows={4}/>
        </Form.Item>
    </Form>
  )
}
