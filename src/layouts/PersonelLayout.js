import { Button, Table } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'

export default function PersonelLayout() {

    const columns = [
        {
            title: 'No',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: 'Service',
            key: 'service',
            dataIndex: 'service'
        },
        {
            title: 'FUll Name',
            key: 'fullName',
            dataIndex: 'fullName'
        },
        {
            title: 'Phone',
            key: 'phone',
            dataIndex: 'phone'
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email'
        },
        {
            title: 'Area',
            key: 'area',
            dataIndex: 'area'
        },
        {
            title: 'Country',
            key: 'country',
            dataIndex: 'country'
        },
    ]

  return (
    <div className='p-6'>
        <Search placeholder='Search' className='w-4/5 md:w-1/4 float-left mb-4'/>
        <Button className='float-right ml-2'> Add </Button>
        <Table scroll={{x: true}} columns={columns} />
    </div>
  )
}
