import { Input, InputNumber } from 'antd'
import React from 'react'

export default function RefundComponent() {
  return (
    <div>
        <label>Name</label>
        <Input />
        <label>Phone No</label>
        <Input />
        <label>Amount</label>
        <br/>
        <InputNumber width={100} />
    </div>
  )
}
