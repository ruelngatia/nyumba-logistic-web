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
    <div className='shadow-1xl w-full lg:w-2/4 relative'>
      <Button className='top-3 absolute right-2 z-10 float-right bg-primary-color text-white' onClick={()=>setIsAddReminder(!isAddReminder)}>Add</Button>
      <Table title={()=><Typography>Reminder</Typography>} pagination={{hideOnSinglePage:true}} columns={columns} dataSource={data}/>
    </div>
  )
}
