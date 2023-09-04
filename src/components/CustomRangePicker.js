import React from 'react'
import { DatePicker } from 'antd'

export default function CustomRangePicker() {
    const {RangePicker} = DatePicker;
  return (
    <div className='p-2'>
        <RangePicker/>
    </div>
  )
}
