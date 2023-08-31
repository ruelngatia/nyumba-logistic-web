import { Table } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'

export default function SMSLayout() {

    const columns = [
        {
            title: 'Sent At',
            key: 'sentAt',
            dataIndex: 'sentAt'
        },
        {
            title: 'Recipient',
            children: [
                {
                    title: 'Room',
                    key: 'room',
                    dataIndex: 'room'
                },
                {
                    title: 'Name',
                    key: 'name',
                    dataIndex: 'name'
                }
            ]
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message'
        },
        {
            title: 'Sent',
            dataIndex: 'sent',
            key: 'sent'
        },
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user'
        }
    ]

  return (
    <div className='p-6'>
        <Search className='w-4/5 md:w-1/4 float-left' placeholder='Search'/>
        <Table columns={columns} scroll={{x: true}}/>
    </div>
  )
}