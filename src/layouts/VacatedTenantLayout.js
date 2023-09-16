import { Button, Table } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'
import CustomRangePicker from '../components/CustomRangePicker'

export default function VacatedTenantLayout() {
    const columns = [
        {
           title: 'No',
           key: 'no',
           dataIndex: 'no'
        },
        {
           title: 'Name',
           key: 'name',
           dataIndex: 'name'
        },
        {
            title: 'Gender',
            key: 'gender',
            dataIndex: 'gender'
         },
         {
            title: 'Conatact',
            key: 'before',
            children: [
                {
                    title: 'Phone',
                    key: 'phone',
                    dataIndex: 'phone'
                },
                {
                    title: 'Email',
                    key: 'email',
                    dataIndex: 'email'
                }
            ]
         },
         {
            title: 'Id number',
            key: 'IdNumber',
            dataIndex: 'IdNumber'
         },
         {
            title: 'Occupation',
            key: 'occupation',
            dataIndex: 'occupation'
         },
         {
            title: 'KRA Pin',
            key: 'KRAPin',
            dataIndex: 'KRAPin'
         },
        {
            title: 'From',
            key: 'from',
            dataIndex: 'from',
            filterDropdown: <CustomRangePicker/>
        },
        {
            title: 'To',
            key: 'to',
            dataIndex: 'to',
            filterDropdown: <CustomRangePicker/>
        },
        {
            title: 'Last Balance',
            key: 'lastBalance',
            dataIndex: 'lastBalance'
        }
    ]

    const data = [
        {
            key: '1',
            no: '1',
            name: 'john doe',
            gender: 'Male',
            phone: '0712345678',
            email: 'john@email.com',
            IdNumber: '123456',
            occupation: 'teacher',
            KRApin: '25413',
            from: '2/3/2000',
            to: '2/3/2000',
            lastBalance: 'Ksh: 5225'
        }
    ]

  return (
    <div className='p-1 lg:p-6'>
        <Search placeholder='Search' className='w-4/5 md:w-1/4 float-left mb-4'/>
        <Button className='float-right ml-2'> Add </Button>
        <Table scroll={{x: true}} dataSource={data} columns={columns}/>
    </div>
  )
}
