import { Form, Input, Radio } from "antd";
import React from "react";
import CustomRangePicker from "../components/CustomRangePicker";

export default function GenerateStatementForm() {
  return (
    <div>
      <Form layout="vertical">
        <Form.Item label="Insert ID Number :">
          <Input />
        </Form.Item>
        <Form.Item label="Time :">
          <CustomRangePicker />
        </Form.Item>
        <Form.Item>
          <Radio>Full Statement</Radio>
        </Form.Item>
      </Form>
    </div>
  );
}
