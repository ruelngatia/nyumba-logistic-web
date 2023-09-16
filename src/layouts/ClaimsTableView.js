import { Table } from 'antd'
import React from 'react'

export default function ClaimsTableView() {

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
            title: 'Name',
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: 'Amount',
            key: 'amount',
            dataIndex: 'amount'
        },
        {
            title: 'Description',
            key: 'description',
            dataIndex: 'description'
        }
    ]

  return (
    <div>
        <Table columns={columns} rowSelection={{type: 'checkbox'}}/>
    </div>
  )
}
