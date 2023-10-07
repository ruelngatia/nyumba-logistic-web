import { Table } from 'antd'
import React from 'react'

export default function AnalysisSystemLogLayout() {

    const columns = [
        {
            title: "No",
            key: "no",
            dataIndex: "no"
        },
        {
            title: "DateTime",
            key: "datetime",
            dataIndex: "datetime",
            width: 300
        },
        {
            title: "Activity",
            key: "activity",
            dataIndex: "activity"
        },
        {
            title: "User",
            key: "user",
            dataIndex: "user"
        }
    ]

  return (
    <div className='p-1 lg:p-6'>
        <Table columns={columns} scroll={{x: true}} />
    </div>
  )
}
