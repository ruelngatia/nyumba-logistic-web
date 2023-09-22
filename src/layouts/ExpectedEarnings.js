import { Table } from 'antd'
import React from 'react'

export default function ExpectedEarnings() {
    const columns = [
        {
            title: 'No',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: 'Room',
            key: 'room',
            dataIndex: 'room'
        },{
            title: 'Account No',
            key: 'accountNo',
            dataIndex: 'accountNo'
        },{
            title: 'Name',
            key: 'name',
            dataIndex: 'name'
        },{
            title: 'Bill',
            key: 'bill',
            dataIndex: 'bill'
        },
    ]
  return (
    <div>
        <Table columns={columns} scroll={{x: true}}/>
    </div>
  )
}
