import { Space, Table } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'
import CustomRangePicker from '../components/CustomRangePicker'

export default function OutstandingBillsLayout() {

    const columns = [
        {
            title: 'No ',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: 'Utility',
            key: 'utility',
            dataIndex: 'utility'
        },
        {
            title: 'Units Captured',
            key: 'unitsCaptured',
            dataIndex: 'unitsCaptured'
        },
        {
            title: 'Amount Owed',
            key: 'amountOwed',
            dataIndex: 'amountOwed'
        },
        {
            title: 'Date',
            key: 'date',
            dataIndex: 'date',
            filterDropdown: <CustomRangePicker/>
        }
    ]


  return (
    <div className='p-1 lg:p-6'>
        <Search placeholder='Search' className='w-4/5 md:w-1/4 float-left mb-4'/>
        <div className='block lg:inline-flex'>
            <Table className='w-full lg:w-5/6' columns={columns} scroll={{x: true}}/>
            <Space className='text-left float-left mt-4'>
                <span className='w-1'>
                    Total Amount Payable
                </span>
                <span>
                    KSH. 20000
                </span>
            </Space>
        </div>
    </div>
  )
}
