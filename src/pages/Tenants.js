import { Tabs } from 'antd'
import React from 'react'
import TenantViewLayout from '../layouts/TenantViewLayout'
import TenatSwapLayout from '../layouts/TenantSwapLayout'

export default function Tenants() {

  const tabs = [
    {
      key: '1',
      label: 'View',
      children: <TenantViewLayout/>
    },
    {
      key: '2',
      label: 'Swap',
      children: <TenatSwapLayout/>
    },
    {
      key: '3',
      label: 'Statement',
      children: 'Statement'
    },
    {
      key: '4',
      label: 'Vacated tentants',
      children: 'Vacated tentants'
    },
  ]

  return (
    <div className='pl-2'>
      <Tabs items={tabs} defaultActiveKey='1'/>
    </div>
  )
}
