import { Button, Menu, Table } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'

export default function StabalizeInvoiceLayout() {

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
            title: 'Account No',
            key: 'accountNo',
            dataIndex: 'accountNo'
        },
        {
            title: 'Tenant',
            key: 'tenant',
            dataIndex: 'tenant'
        },
        {
            title: 'Room',
            key: 'room',
            dataIndex: 'room'
        },
        {
            title: 'Amount',
            key: 'amount',
            dataIndex: 'amount'
        },
        {
            title: 'User',
            key: 'user',
            dataIndex: 'user'
        },
        {
            title: 'Reason',
            key: 'reason',
            dataIndex: 'reason'
        }
    ]

    const data = []

  return (
    <div className="p-6">
      <Search placeholder="Search" className="w-4/5 md:w-1/4 float-left mb-4" />
      <Button className="float-right ml-2"> Add </Button>
      <Table scroll={{ x: true }} dataSource={data} columns={columns} />
    </div>
  );
}
