import { Table } from 'antd'
import Search from 'antd/es/transfer/search'
import React from 'react'

export default function InvoiceBreakdownLayout() {

    const columns = [
        {
            title: "No",
            key: "no",
            dataIndex: "no"
        },
        {
            title: "Timestamp",
            key: "timestamp",
            dataIndex: "timestamp"
        },
        {
            title: "Description",
            key: "description",
            dataIndex: "description"
        },
        {
            title: "Amount",
            key: "amount",
            dataIndex: "amount"
        },
        {
            title: "Tenant",
            key: "tenant",
            dataIndex: "tenant"
        },
        {
            title: "Account no",
            key: "accountNo",
            dataIndex: "accountNo"
        },

    ]

  return (
    <div className='p-1 lg:p-6'>
        <Search placeholder="Search" className="w-4/5 md:w-1/4 float-left mb-1" />
        <Table scroll={{x: true}} columns={columns}/>
    </div>
  )
}
