import { Button, Form, Input, Space } from "antd";
import React from "react";

export default function AddProfileSettingsFrom() {
  return (
    <Form className="text-left" layout="vertical" style={{maxWidth: 800}}>
      <div className="grid grid-cols-2 gap-2">
      <Form.Item label='First Name'>
        <Input />
      </Form.Item>
      <Form.Item label='Last Name'>
        <Input />
      </Form.Item>
      <Form.Item label='Phone No'>
        <Input />
      </Form.Item>
      <Form.Item label='Email'>
        <Input />
      </Form.Item>
      <Form.Item label='Username'>
        <Input />
      </Form.Item>
      <span/>
      <Form.Item label='Password'>
        <Input type="password"/>
      </Form.Item>
    </div>  
    <Space>
        <Button>
            Save
        </Button>
    </Space>
    </Form>
  );
}
