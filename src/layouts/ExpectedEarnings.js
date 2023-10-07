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

    const data = [
        {
            no: 1,
            room: "A4",
            accountNo: "23234",
            name: "John Doe",
            bill: "KSH 4,525"
        }
    ]

    const expandedRowRender = () => {
        const columns = [
            {
                title: "No",
                key: "no",
                dataIndex: "no"
            },
            {
                title: "Description",
                key: "description",
                dataIndex: "description"
            },
            {
                title: "Amount",
                key: "amount",
                dataIndex: "amount"
            },
            {
                title: "Date Billed",
                key: "dateBilled",
                dataIndex: "dateBilled"
            },
            
        ]
        return <Table columns={columns} scroll={{x: true}}/>
    }

  return (
    <div>
        <Table dataSource={data} columns={columns} scroll={{x: true}} expandable={{expandedRowRender}} />
    </div>
  )
}
