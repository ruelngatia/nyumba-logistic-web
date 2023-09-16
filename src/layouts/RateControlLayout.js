import { Button, Input, Space } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import React from "react";

export default function RateControlLayout() {
  return (
    <div className="p-1 lg:p-6 text-left float-left">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-end gap-3">

        <div>
            <p>Communication</p>
            <Space>
            <Checkbox>Sms Rate</Checkbox>
            <Input />
            <Button>Save</Button>
            </Space>
        </div>

        <div>
            <Space>
            <Checkbox>Email Verification</Checkbox>
            <Input />
            <Button>Save</Button>
            </Space>
        </div>

        <div>
            <p>Intergrations</p>
            <Space>
              <Checkbox>IPRA</Checkbox>
              <Input />
              <Button>Save</Button>
            </Space>
        </div>

        <div>
            <Space>
            <Checkbox>Lawyer Contact</Checkbox>
            <Input />
            <Button>Save</Button>
            </Space>
        </div>
      </div>
    </div>
  );
}
