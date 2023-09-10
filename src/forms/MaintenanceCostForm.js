import { Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function MaintenanceCostForm() {
  return (
    <Form layout="vertical">
      <Form.Item label="Service">
        <Select />
      </Form.Item>
      <Form.Item label="Cost">
        <Input />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea rows={4} />
      </Form.Item>
    </Form>
  );
}
