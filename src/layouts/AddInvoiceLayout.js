import { Button, Input, Radio, Select } from 'antd'
import React, { useState } from 'react'

export default function AddInvoiceLayout() {

    const category = [
        {
            value: "val",
            label: "Valldfvdfv"
        },
        {
            value: "Poll",
            label: "df"
        },
    ]

    const [billingType,setBillingType] = useState(1)

  return (
    <div>
        <Select popupMatchSelectWidth={false} placeholder='Category' options={category}/>
        <Radio.Group onChange={(e) => setBillingType(e.target.value)} value={billingType}>
            <Radio value={1}>Fixed bill</Radio>
            <Radio value={2}>Rate bill</Radio>
        </Radio.Group>
        <Input className='w-1/5'/>
        <Button>Save</Button>
        <div>
            <Button>Find</Button>
        </div>
    </div>
  )
}
