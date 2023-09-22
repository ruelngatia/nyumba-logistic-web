import { Button, Menu, Table } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function TenantViewLayout() {

    const columns = [
        {
           title: 'No',
           key: 'no',
           dataIndex: 'no'
        },
        {
           title: 'Acct No',
           key: 'acctNo',
           dataIndex: 'acctNo'
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
            title: 'Contact',
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
            title: 'KRA pin',
            key: 'KRAPin',
            dataIndex: 'KRAPin'
         },
         {
            title: 'Status',
            key: 'status',
            dataIndex: 'status'
         },
         {
            title: 'Action',
            key: 'action',
            dataIndex: '',
            render: () => <Menu></Menu>
         },
    ]

    const data = [
        {
            key: '1',
            no: '1',
            acctNo: '2',
            name: 'john doe',
            gender: 'Male',
            phone: '07123456789',
            email: 'test@email.com',
            IdNumber: '1234567',
            occupation: 'Teacher',
            KRAPin: 'jer23fsdf',
            status: 'Married'
        }
    ]

    const navigator = useNavigate()

  return (
    <div className='p-1 lg:p-6'>
        <Search placeholder='Search' className='w-4/5 md:w-1/4 float-left mb-4'/>
        <Button className='float-right ml-2' onClick={() => navigator('/tenants?modal=addTenant')}> Add </Button>
        <Table scroll={{x: true}} dataSource={data} columns={columns}/>
    </div>
  )
}
