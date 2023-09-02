import { Tabs } from 'antd'
import React from 'react'
import SettingsViewLayout from '../layouts/SettingsViewLayout'
import SettingsAdvancedLayout from '../layouts/SettingsAdvancedLayout'

export default function Settings() {

    const items = [
        {
            label: 'Profile',
            key: '1',
            children: 'sdsd'
        },
        {
            label: 'View',
            key: '2',
            children: <SettingsViewLayout/>
        },
        {
            label: 'Add',
            key: '3',
            children: 'sdsd'
        },
        {
            label: 'Advanced',
            key: '4',
            children: <SettingsAdvancedLayout/>
        }
    ]

  return (
    <div className='m-2'>
        <Tabs items={items} defaultActiveKey='1'/>
    </div>
  )
}
