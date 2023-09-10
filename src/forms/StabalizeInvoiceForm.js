import { Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function StabalizeInvoiceForm() {
  return (
    <Form layout="vertical">
    <Form.Item label="Account No">
      <Select />
    </Form.Item>
    <Form.Item label="Amount">
      <Input />
    </Form.Item>
    <Form.Item label="Reason" rules={[{required: true, message: 'Reason is required'}]}>
      <TextArea rows={4} />
    </Form.Item>
  </Form>
  )
}
