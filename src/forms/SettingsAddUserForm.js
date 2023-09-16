import { Button, Checkbox, Form, Input, Radio, Select, Space } from "antd";
import React, { useState } from "react";
import AddRightsForm from "./AddRightsForm";
import CustomModal from "../components/CustomModal";

export default function SettingsAddUserForm() {

  const [isAccessRights, setIsAccessRights] = useState(false)

  return (
    <div>
      <Form className="text-left" layout="vertical" style={{ maxWidth: 700 }}>
        <div className="grid grid-cols-2 gap-2">
          <Form.Item label="First Name">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Phone">
            <Input />
          </Form.Item>
        </div>
        <Button onClick={() => setIsAccessRights(true)}>Access rights</Button>
        <div className="grid grid-cols-3 gap-2">
          <Form.Item label="Username">
            <Input />
          </Form.Item>
          <Form.Item label="Role">
            <Input />
          </Form.Item>
          <Form.Item label="Buildings">
            <Select />
          </Form.Item>
        </div>
        <Form.Item>
              <Checkbox>Two factor authentication</Checkbox>
              <br/>
              <Radio.Group className="ml-5 mt-1">
                  <Radio value={1}>SMS</Radio>
                  <Radio value={2}>Email</Radio>
              </Radio.Group>
          </Form.Item>
          <Space>
            <Button>Save</Button>
            <Button>Reset</Button>
          </Space>
      </Form>
      <CustomModal title="Access Rights " children={<AddRightsForm/>} okText="Save" open={isAccessRights} setClose={setIsAccessRights}/>
    </div>
  );
}
