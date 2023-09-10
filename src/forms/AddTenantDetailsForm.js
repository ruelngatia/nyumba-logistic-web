import { Button, Divider, Form, Input, Radio, Select } from "antd";
import React, { useState } from "react";

export default function AddTenantDetailsForm() {
  const [gender, setGender] = useState();
  const [inhabitants, setInhabitants] = useState();

  const IDOptions = [
    {
      label: "Pass port",
      value: "pass port",
    },
    {
      label: "National ID",
      value: "National ID",
    },
  ];


  return (
    <Form layout="vertical">
      <div className="flex flex-row items-center">
        <Form.Item label="Unit">
          <Select />
        </Form.Item>
        <Button>Initial Bill</Button>
        <Button className="ml-auto">Existing Tenant</Button>
      </div>
      <Form.Item>
        <Radio.Group onChange={(value) => setInhabitants(value.target.value)}>
          <Radio value={1}>Individual</Radio>
          <Radio value={2}>Institution</Radio>
        </Radio.Group>
      </Form.Item>
      <div className="grid grid-cols-3 gap-2">
        <Form.Item label="First Name">
          <Input />
        </Form.Item>
        <Form.Item label="Second Name">
          <Input />
        </Form.Item>
      </div>
      <Form.Item>
        <Radio.Group onChange={(value) => setGender(value.target.value)}>
          <Radio value={1}>Male</Radio>
          <Radio value={2}>Female</Radio>
        </Radio.Group>
      </Form.Item>
      <div className="grid grid-cols-3 gap-2">
        <Form.Item label="Phone">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Form.Item label="Nationality">
          <Input />
        </Form.Item>
        <Form.Item label="ID Type">
          <Select options={IDOptions} />
        </Form.Item>
        <Form.Item label="ID Number">
          <Input />
        </Form.Item>
        <Form.Item label="Occupation">
          <Input />
        </Form.Item>
        <Form.Item label="KRA Pin">
          <Input />
        </Form.Item>
      </div>
      {inhabitants === 2 ? (
        <>
          <Divider orientation="left">Institution</Divider>
          <div className="grid grid-cols-3 gap-2">
            <Form.Item label="Company Name">
              <Input />
            </Form.Item>
            <Form.Item label="Trading Pin">
              <Input />
            </Form.Item>
            <Form.Item label="Nature of Business">
              <Input />
            </Form.Item>
            <Form.Item label="Phone">
              <Input />
            </Form.Item>
            <Form.Item label="Email">
              <Input />
            </Form.Item>
            <Form.Item label="Former Resident">
              <Input />
            </Form.Item>
            <Form.Item label="Contact">
              <Input />
            </Form.Item>
          </div>
        </>
      ) : (
        <> </>
      )}
    </Form>
  );
}
