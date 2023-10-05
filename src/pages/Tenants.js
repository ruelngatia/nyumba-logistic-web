import { Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import TenantViewLayout from '../layouts/TenantViewLayout'
import TenatSwapLayout from '../layouts/TenantSwapLayout'
import TenantStatementLayout from '../layouts/TenantStatementLayout'
import VacatedTenantLayout from '../layouts/VacatedTenantLayout'
import CustomModal from '../components/CustomModal'
import GenerateStatementForm from '../forms/GenerateStatementForm'

export default function Tenants() {

  const [defaultActiveKey,setDefaultActiveKey] = useState();
  const [isStatement,setIsStatement] = useState(defaultActiveKey === '3');

  useEffect(()=>{
    defaultActiveKey === '3'? setIsStatement(true) : setIsStatement(false)
  }
  ,[defaultActiveKey])

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
      <Tabs items={tabs} defaultActiveKey='1' onChange={(e) => setDefaultActiveKey(e)}/>
      <CustomModal open={isStatement} title={'Tenant Statement'} setClose={setIsStatement} children={<GenerateStatementForm/>}/>
    </div>
  )
}
