import { Table } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'

export default function SessionsLayout() {

    const columns = [
        {
            title: 'No Idetifier',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: 'Timestamp',
            key: 'timestamp',
            dataIndex: 'timestamp'
        },
        {
            title: 'Landlord',
            key: 'landlord',
            dataIndex: 'landlord'
        },
        {
            title: 'Bill',
            key: 'bill',
            dataIndex: 'bill'
        },
        {
            title: 'Paid',
            key: 'paid',
            dataIndex: 'paid'
        },
        {
            title: 'Invoices Closed',
            key: 'invoicesclosed',
            dataIndex: 'invoicesclosed'
        },
        {
            title: 'Invoices Generated',
            key: 'invoicesGenerated',
            dataIndex: 'invoicesGenerated'
        }
    ]

  return (
    <div className='p-6'>
        <Search placeholder='Search' className='w-4/5 md:w-1/4 float-left mb-4'/>
        <Table columns={columns} scroll={{x: true}}/>
    </div>
  )
}
