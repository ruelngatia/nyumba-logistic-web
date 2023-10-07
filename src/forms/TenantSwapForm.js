import { Form, Input } from 'antd'
import React from 'react'

export default function TenantSwapForm() {
  return (
    <div>
        <Form layout='vertical'>
            <Form.Item label="Current Room">
                <Input />
            </Form.Item>
            <Form.Item label="New room">
                <Input />
            </Form.Item>
        </Form>
    </div>
  )
}
