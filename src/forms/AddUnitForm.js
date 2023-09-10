import { Checkbox, Divider, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

export default function AddUnitForm() {
  const [form] = Form.useForm();
  const [roomType, setRoomType] = useState('')

  const roomTypeOptions = [
    {
      label: "Residential",
      value: "residential",
    },
    {
      label: "Commercial",
      value: "commercial",
    },
  ];

  const handleRoomType = (value) => {
    setRoomType(value)
  }

  return (
    <Form layout="vertical" form={form}>
      <div className="grid grid-cols-3 gap-2">
        <Form.Item label="Label">
          <Select />
        </Form.Item>
        <Form.Item label="Room No">
          <Select />
        </Form.Item>
        <Form.Item label="Room Type" name={"roomType"}>
          {/* comercial */}
          <Select options={roomTypeOptions} onChange={handleRoomType}/>
        </Form.Item>
        <Form.Item label="Rent">
          <Input />
        </Form.Item>
        <Form.Item label="Deposit">
          <Input />
        </Form.Item>
      </div>
      <Divider orientation="left">Finance</Divider>
      <div className="grid grid-cols-3 gap-2">
        <Form.Item label="Paybill">
          <Input />
        </Form.Item>
        <Form.Item label="Prefix">
          <Input />
        </Form.Item>
        <Form.Item label="Billing period">
          {/* date format */}
          <Input />
        </Form.Item>
      </div>
      <Divider orientation="left">Communications</Divider>
      <div className="grid grid-cols-3 gap-2">
        <Checkbox>Send Invoice</Checkbox>
        <Checkbox>Send Reciept</Checkbox>
      </div>
      <Divider orientation="left">Taxes</Divider>
      <div className="grid grid-cols-3 gap-2">
        {roomType === 'residential' ? (
          <>
            <Form.Item label="MRI">
              <Input />
            </Form.Item>
          </>
        ) : (
          <>
             <Form.Item label="VAT">
              <Input />
            </Form.Item>
            <Form.Item label="SQ Feet">
              <Input />
            </Form.Item>
          </>
        )}
      </div>
      <Divider orientation="left">Extra</Divider>
      <Form.Item label="Description">
        <TextArea rows={4}/>
      </Form.Item>
      
    </Form>
  );
}
