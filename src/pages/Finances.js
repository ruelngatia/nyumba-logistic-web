import { Tabs } from 'antd'
import React from 'react'
import RecieptsLayout from '../layouts/RecieptsLayout'
import PaymementsLayout from '../layouts/PaymentsLayout'
import ViewBookingsLayout from '../layouts/ViewBookingsLayout'
import FinanceRefundsLayout from '../layouts/FinanceRefundsLayout'


export default function Finances() {

    const items = [
        {
            label: 'Payments',
            key: '1',
            children: <PaymementsLayout/>
        },
        {
            label: 'Recipets',
            key: '2',
            children: <RecieptsLayout/>
        },
        {
            label: 'Bookings',
            key: '3',
            children: <ViewBookingsLayout/>
        },
        {
            label: 'Refunds',
            key: '4',
            children: <FinanceRefundsLayout/>
        }
    ]

  return (
    <div className='m-2'>
        <Tabs items={items} defaultActiveKey='1'/>
    </div>
  )
}
