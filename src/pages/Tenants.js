import { Tabs } from 'antd'
import React from 'react'
import TenantViewLayout from '../layouts/TenantViewLayout'
import TenatSwapLayout from '../layouts/TenantSwapLayout'
import TenantStatementLayout from '../layouts/TenantStatementLayout'
import VacatedTenantLayout from '../layouts/VacatedTenantLayout'

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
      children: <TenantStatementLayout/>
    },
    {
      key: '4',
      label: 'Vacated tentants',
      children: <VacatedTenantLayout/>
    },
  ]

  return (
    <div className='pl-3'>
      <Tabs items={tabs} defaultActiveKey='1'/>
    </div>
  )
}
