import { Button, Table } from 'antd'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

export default function SettingsAdvancedLayout() {

    const columns = [
        {
            title: 'No',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: 'User',
            key: 'user',
            dataIndex: 'user'
        },
        {
            title: 'Services',
            children: [
                {
                    title: 'Daily',
                    key: 'daily',
                    dataIndex: 'daily'
                },
                {
                    title: 'Month',
                    key: 'month',
                    dataIndex: 'month'
                },
            ]
        },
        {
            title: 'Edit',
            render: ()=> (<EditIcon color='primary'/>)
        },
    ];

    const data = [
        {
            no: '1',
            user: 'John doe',
            daily: 'yes',
            month: 'no',

        }
    ]

  return (
    <div>
        <Button className='float-right mb-2'>
            <AddIcon fontSize='20px'/> Enroll user
        </Button>
        <Table columns={columns} dataSource={data} scroll={{x: true}}/>
    </div>
  )
}
