import { Table } from 'antd'
import React from 'react'

export default function TenantsList() {

    const columns = [
        {
            title: "Room No",
            key: "roomNo",
            dataIndex: "roomno"
        },
        {
            title: "Name",
            key: "name",
            dataIndex: "name",
        },
        {
            title: "Balance",
            key: "balance",
            dataIndex: 'balance',
            width: 60   
        }
    ]

  return (
    <div>
        <Table columns={columns} rowSelection={{type: 'checkbox'}}/>
    </div>
  )
}
