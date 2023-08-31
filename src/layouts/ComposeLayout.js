import { Radio } from 'antd'
import React from 'react'

export default function ComposeLayout() {
  return (
    <div className='p-6'>
       <div className='inline-flex float-left space-x-12'>
        <div className='text-left'>
                <span>Mode</span>
                <br/>
                <Radio.Group>
                    <Radio>SMS</Radio>
                    <Radio>Email</Radio>
                </Radio.Group>
            </div>
            <div className='text-left'>
                <span className='text-left'>Recipients</span>
                <br/>
                <Radio.Group>
                    <Radio>All</Radio>
                    <Radio>Selected</Radio>
                </Radio.Group>
            </div>
       </div>
    </div>
  )
}
