import { Button, Input, List, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function ComposeLayout() {
  return (
    <div className="p-6 text-left">
      <div className="inline-flex space-x-12">
        <div className="text-left ">
          <span>Mode</span>
          <br />
          <Radio.Group>
            <Radio>SMS</Radio>
            <Radio>Email</Radio>
          </Radio.Group>
        </div>
        <div className="text-left">
          <span className="text-left">Recipients</span>
          <br />
          <Radio.Group>
            <Radio>All</Radio>
            <Radio>Selected</Radio>
          </Radio.Group>
        </div>
      </div>
      <br/>
      <div className="flex flex-col lg:flex-row mt-8 gap-3">
        <List
        className="w-full lg:w-1/2 flex-1"
          header={'Recipient'}
          bordered
        />
        <div className="flex-1">
          <Input placeholder="Enter subject" className="mb-1"/>
          <TextArea className="w-full " placeholder="Enter message" rows={10}/>
        </div>
      </div>
      <div className="mt-4">
        <Button className="mr-2">
          Reset
        </Button>
        <Button>
          Send
        </Button>
      </div>
    </div>
  );
}
