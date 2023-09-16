import { Table, Typography } from 'antd'
import React from 'react'

export default function NoticeTable() {
    const columns = [
        {
          title: 'No',
          dataIndex: 'no',
          key: 'no',
        },
        {
          title: 'Unit',
          dataIndex: 'unit',
          key: 'unit',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'Act No',
            dataIndex: 'actNo',
            key: 'actNo',
          },
          {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
          },
      ];

      const data = [
        {
            key: '1',
            no: 1,
            unit: 'A3',
            name: 'Omari Dan',
            actNo: '1233',
            balance: 'ksh 1000'
        },
        {
          key: '2',
          no: 3,
          unit: 'A5',
          name: 'Omari Dan',
          actNo: '1233',
          balance: 'ksh 1000'
      }
      ]

  return (
    <div className=' shadow-1xl lg:w-2/4'>
        
        <Table title={()=><Typography>Notice Board</Typography>} size='middle' pagination={{hideOnSinglePage: true}} dataSource={data} columns={columns}/>
    </div>
  )
}
