import { Table } from 'antd'
import React from 'react'

export default function ReminderTable() {

    const columns = [
        {
          title: 'No',
          dataIndex: 'no',
          key: 'no',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Form',
          dataIndex: 'form',
          key: 'form',
        }
    ]

    const data = [
        {
            key: '1',
            no: 1,
            description: 'something',
            form: 'formed'

        }
    ]

  return (
    <div className='shadow-xl w-full lg:w-2/4'>
        <Table pagination={{hideOnSinglePage:true}} columns={columns} dataSource={data}/>
    </div>
  )
}
