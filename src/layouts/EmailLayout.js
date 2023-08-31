import { Table, message } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'

export default function EmailLayout() {

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
            title: 'Mail',
            children: [
                {
                    title: 'Subject',
                    key: 'subject',
                    dataIndex: 'subject'
                },
                {
                    title: 'Message',
                    key: 'message',
                    dataIndex: 'message'
                }
            ]
        },
        {
            title: 'Sent',
            dataIndex: 'sent',
            key: 'sent'
        },
        {
            title: "Has File",
            key: 'hasFile',
            dataIndex: 'hasFile'
        },
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user'
        }
    ]

  return (
    <div className='p-9'>
        <Search className='w-4/5 md:w-1/4 float-left' placeholder='Search'/>
        <Table className='pt-4' columns={columns} scroll={{x: true}} />
    </div>
  )
}
