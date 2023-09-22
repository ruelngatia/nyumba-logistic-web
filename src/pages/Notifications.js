import { Table } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'

export default function Notifications() {

    const columns = [
        {
            title: 'No',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: 'Time stamp',
            key: 'timeStamp',
            dataIndex: 'timeStamp'
        },
        {
            title: 'Transaction Type',
            key: 'trasactionType',
            dataIndex: 'trasactionType'
        },
        {
            title: 'Description',
            key: 'description',
            dataIndex: 'description'
        },
    ]

  return (
    <div className='text-left m-3'>
        <Search placeholder='Search notification' className='w-3/5 lg:2/5 mb-3' />
        <Table columns={columns} scroll={{x: true}}/>
    </div>
  )
}
