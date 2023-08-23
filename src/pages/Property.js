import { Tabs } from 'antd'
import React from 'react'
import BuildingLayout from '../layouts/BuildingLayout'
import UnitsLayout from '../layouts/UnitsLayout'

export default function Property() {
    const items = [
        {
            key: '1',
            label: 'Building',
            children: <BuildingLayout/>
        },
        {
            key: '2',
            label: 'Units',
            children: <UnitsLayout/>
        },
    ]
  return (
    <div className='pl-2'>
        <Tabs items={items} defaultActiveKey='1'/>
    </div>
  )
}
