import { Checkbox, Divider, Form, Input, Select, Space } from "antd";
import React from "react";

export default function AddBuildingForm() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 10,
    },
  };

  return (
    <Form layout="vertical" {...layout}>
      <div className="grid grid-cols-3 gap-1">
        <Form.Item
          label="Name"
          wrapperCol={1}
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input placeholder="John doe" />
        </Form.Item>
        <Form.Item
          label="Email"
          wrapperCol={1}
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input placeholder="Email Address" />
        </Form.Item>
        <Form.Item
          label="Contact"
          wrapperCol={1}
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input placeholder="Phone number" />
        </Form.Item>
      </div>
      <Form.Item label="Landlord">
        <Select />
      </Form.Item>
      <div className="grid grid-cols-3 gap-1">
        <Form.Item
          label="Address"
          wrapperCol={1}
          rules={[{ required: true, message: "Address is required" }]}
        >
          <Input placeholder="P.O BOX" />
        </Form.Item>
        <Form.Item
          label="Location"
          wrapperCol={1}
          rules={[{ required: true, message: "Laction is required" }]}
        >
          <Input placeholder="Example Nairobi" />
        </Form.Item>
        <Form.Item
          label="County"
          wrapperCol={1}
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Select />
        </Form.Item>
      </div>
      <Divider orientation="left">Notifications</Divider>
      <div className="grid grid-cols-2">
        <Form.Item wrapperCol={1} label="Daily report">
          <Space >
            <Checkbox />
            <Input />
          </Space>
        </Form.Item>
        <Form.Item wrapperCol={1} label="Monthly analysis">
          <Space align="end">
            <Checkbox />
            <Input />
          </Space>
        </Form.Item>
      </div>
      <Divider orientation="left">Finance</Divider>
      <div className="grid grid-cols-2 gap-2">
        <Form.Item wrapperCol={2} label="Paybill">
          <Input/>
        </Form.Item>
        <Form.Item wrapperCol={2} label="Till">
          <Input/>
        </Form.Item>
      </div>
      <Divider orientation="left">Communications</Divider>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Checkbox>Welcome message</Checkbox>
        <Checkbox>Billing message</Checkbox>
        <Checkbox>Swap Notification</Checkbox>
        <Checkbox>Negative/Stabalizer</Checkbox>
        <Checkbox>Reciept</Checkbox>
        <Checkbox>Notice Notification</Checkbox>
        <Checkbox>New personal Notification</Checkbox>
      </div>
    </Form>
  );
}
