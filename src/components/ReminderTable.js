import { Button, Table, Typography } from 'antd'
import React from 'react'

export default function ReminderTable({isAddReminder,setIsAddReminder}) {

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
    <div className='shadow-1xl w-full lg:w-2/4'>
      <Typography>Reminder</Typography>
      <Button className='float-right mr-2 bg-primary-color text-white' onClick={()=>setIsAddReminder(!isAddReminder)}>Add</Button>
      <Table pagination={{hideOnSinglePage:true}} columns={columns} dataSource={data}/>
    </div>
  )
}
