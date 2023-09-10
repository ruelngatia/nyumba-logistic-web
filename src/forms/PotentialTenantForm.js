import { DatePicker, Form, Input } from 'antd'
import React from 'react'

export default function PotentialTenantForm() {
  return (
    <Form layout='vertical'>
        <Form.Item name={"name"} label="Name" rules={[{required: true, message: "Name is required"}]}>
            <Input />
        </Form.Item>
        <Form.Item name={"PhoneNo"} label="Phone No" rules={[{required: true, message: "Phone is required"}]}>
            <Input />
        </Form.Item>
        <Form.Item name={"desired"} label="Desired Room" rules={[{required: true, message: "Room is required"}]}>
            <Input />
        </Form.Item>
        <Form.Item name={"moveInTime"} label="Desired Move in Date" rules={[{required: true, message: "Date is required"}]}>
            <DatePicker/>
        </Form.Item>
    </Form>
  )
}
