import { Tabs } from 'antd'
import React from 'react'
import PersonelLayout from '../layouts/PersonelLayout'
import OperationalExpenses from '../layouts/OperationalExpenses'
import MaintenanceExpensesLayout from '../layouts/MaintenanceExpensesLayout'

export default function Maintenance() {

    const items = [
        {
            label: 'Personel',
            key: '1',
            children: <PersonelLayout/>
        },
        {
            label: 'Operational Expenses',
            key: '2',
            children: <OperationalExpenses/>
        },
        {
            label: 'Maintenance Expenses',
            key: '3',
            children: <MaintenanceExpensesLayout/>
        }
    ]

  return (
    <div className='m-2'>
        <Tabs items={items} defaultActiveKey='1'/>
    </div>
  )
}
