import { Form, Radio, Select, DatePicker} from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

export default function ReminderForm() {

    const {RangePicker} = DatePicker
    const [timeMode, setTimeMode] = useState(1)

  return (
    <Form>
      <Form.Item label="To">
        <Select />
      </Form.Item>

      <Form.Item label="Description">
        <TextArea rows={4}/>
      </Form.Item>
      <Form.Item label="Time">
        <Radio.Group value={timeMode} onChange={(e)=> setTimeMode(e.target.value)}>
            <Radio value={1}>Fixed</Radio>
            <Radio value={2}>Range</Radio>
            <Radio value={3}>Recurrent</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item hidden={!(timeMode === 1)}>
        <DatePicker/>
      </Form.Item>
      <Form.Item hidden={!(timeMode === 2)}>
        <RangePicker/>
      </Form.Item>
    </Form>
  );
}
