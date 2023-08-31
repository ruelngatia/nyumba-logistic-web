import { Button, Space, Table, Typography } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'

export default function InvoiceViewLayout() {

    const columns = [
        {
            title: 'No',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: 'Invoice number',
            key: 'invoiceNumber',
            dataIndex: 'invoiceNumber'
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status'
        },
        {
            title: 'Date Created',
            key: 'dateCreated',
            dataIndex: 'dateCreated'
        },
        {
            title: 'Tenant',
            key: 'tenant',
            dataIndex: 'tenant'
        },
        {
            title: 'Account No',
            key: 'accountNumber',
            dataIndex: 'accountNumber'
        },
        {
            title: 'Description',
            key: 'description',
            dataIndex: 'description'
        },
        {
            title: 'Bill',
            key: 'bill',
            dataIndex: 'bill'
        },
        {
            title: 'Room',
            key: 'room',
            dataIndex: 'room'
        },
        {
            title: 'More',
            key: '',
            render: () => {<Button>More</Button>}
        }
    ]

    const expandable = () => {
        return <Table scroll={{x: true}} />
    }

  return (
    <div>
        <Search className="w-4/5 md:w-1/4 " placeholder='Search' />
        <div className='flex flex-col xl:flex-row gap-3'>
            <Table className='w-full xl:w-5/6' columns={columns} scroll={{x: true}} expandable={{expandedRowRender: expandable, defaultExpandedRowKeys: ['0']}}/>
            <div className=' grid grid-col-2 md:grid-cols-2 xl:grid-cols-1 mt-4 xl:ml-3 gap-2 '>
                <Button >Send Invoice</Button>
                <Button >Close Bill</Button>
                <Space className='shadow-xl p-2'>
                    <Typography className='text-5xl font-bold'>2</Typography>
                    <span className='text-justify'>Active invoices</span>
                </Space>
                <Space className='shadow-xl p-2'>
                    <Typography className='text-5xl font-bold'>0</Typography>
                    <span className='text-justify'>In-active Invoices</span>
                </Space>
                <Button >Download</Button>
                <Button >Re-innvoice</Button>
            </div>
        </div>
    </div>
  )
}
