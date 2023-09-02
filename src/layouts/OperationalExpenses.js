import { Button, Space, Table } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'

export default function OperationalExpenses() {

    const columns = [
        {
            title: 'No',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: 'Timestamp',
            key: 'timestamp',
            dataIndex: 'timestamp'
        },
        {
            title: 'Personal',
            key: 'personal',
            dataIndex: 'personal'
        },
        {
            title: 'Cost',
            key: 'cost',
            dataIndex: 'cost'
        },
        {
            title: 'Description',
            key: 'description',
            dataIndex: 'description'
        },
        {
            title: 'User',
            key: 'user',
            dataIndex: 'user'
        }
    ]

  return (
    <div className='p-6'>
        <Search placeholder='Search' className='w-4/5 md:w-1/4 float-left mb-4'/>
        <Space className='float-right ml-2'>
            <span>Total Operational Cost: KSH 1000</span>
            <Button > Add Expense</Button>
        </Space>
        <div className='w-full lg:w-5/6'>
            <Table   scroll={{x: true}} columns={columns} />
        </div>
        <Button className='mt-6 float-right'>Personel Statement</Button>
    </div>
  )
}