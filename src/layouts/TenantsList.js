import { Table } from 'antd'
import React from 'react'

export default function TenantsList() {

    const columns = [
        {
            title: "Room No",
            indexKey: "roomNo"
        },
        {
            title: "Name",
            indexKey: "roomNo"   
        }
    ]

  return (
    <div>
        <Table columns={columns} rowSelection={{type: 'checkbox'}}/>
    </div>
  )
}
