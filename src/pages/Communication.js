import { Tabs } from 'antd'
import React from 'react'
import SMSLayout from '../layouts/SMSLayout'
import EmailLayout from '../layouts/EmailLayout'
import ComposeLayout from '../layouts/ComposeLayout'

export default function Communication() {

    const items = [
        {
            label: 'SMS',
            key: '1',
            children: <SMSLayout/>
        },
        {
            label: 'Email',
            key: '2',
            children: <EmailLayout/>
        },
        {
            label: 'Compose',
            key: '3',
            children: <ComposeLayout/>
        },
        {
            label: 'Other',
            key: '4',
            children: 'qessdw6r7'
        }
    ]

  return (
    <div className='m-2'>
        <Tabs items={items}/>
    </div>
  )
}
