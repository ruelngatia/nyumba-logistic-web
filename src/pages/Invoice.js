import { Tabs } from 'antd'
import React from 'react'
import InvoiceViewLayout from '../layouts/InvoiceViewLayout'
import AddInvoiceLayout from '../layouts/AddInvoiceLayout'
import StabalizeInvoiceLayout from '../layouts/StabalizeInvoiceLayout'
import InvoiceBreakdownLayout from '../layouts/InvoiceBreakdownLayout'


export default function Invoice() {

    const items = [
       {
        label: "View",
        key: "1",
        children: <InvoiceViewLayout/>
       },
       {
        label: "Add",
        key: "2",
        children: <AddInvoiceLayout/>
       },
       {
        label: "Stabilize",
        key: "3",
        children: <StabalizeInvoiceLayout/>
       },
       {
        label: "Invoice Breakdown",
        key: "4",
        children: <InvoiceBreakdownLayout/>
       }
    ]

  return (
    <div className='m-2'>
        <Tabs defaultActiveKey='1' items={items}/>
    </div>
  )
}
