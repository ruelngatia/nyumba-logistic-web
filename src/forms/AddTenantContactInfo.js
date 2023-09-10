import { Form, Input } from 'antd'
import React from 'react'

export default function AddTenantContactInfo() {
  return (
    <Form layout='vertical'>
        <div className='grid grid-cols-3 gap-2'>
        <Form.Item label="Name">
            <Input/>
        </Form.Item>
        <Form.Item label="ID Number">
            <Input/>
        </Form.Item>
        <Form.Item label="Relationship">
            <Input/>
        </Form.Item>
        <Form.Item label="Phone No">
            <Input/>
        </Form.Item>
        <Form.Item label="Email">
            <Input/>
        </Form.Item>
        <span></span>
        <Form.Item label="Town">
            <Input/>
        </Form.Item>
        <Form.Item label="Area">
            <Input/>
        </Form.Item>
        </div>
    </Form>
  )
}
