import { Button, Table } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'

export default function BuildingLayout() {

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
            title: 'Address',
            key: 'address',
            dataIndex: 'address'
         },
         {
            title: 'Geo-Location',
            key: 'geoLocation',
            dataIndex: 'geoLocation'
         },
         {
            title: 'Contact',
            key: 'contact',
            dataIndex: 'contact'
         },
         {
            title: 'Communications',
            key: 'communications',
            dataIndex: 'communications'
         },
         {
            title: 'Nationality',
            key: 'nationality',
            dataIndex: 'nationality'
         },
         {
            title: 'Pay before',
            key: 'payBefore',
            dataIndex: 'payBefore'
         },
         {
            title: 'Action',
            key: 'action',
            dataIndex: '',
            render: () => <Button>Update</Button>
         },
    ]

    const data = [
        {
            key: '1',
            no: '2',
            name: 'john doe',
            address: 'P.O> BOX',
            geoLocation: 'somewhere',
            contact: '0712345678',
            commnunications: 'message',
            nationality: 'German',
            payBefore: '2/2/----'
        }
    ]

  return (
    <div className='p-6'>
        <Search placeholder='Search' className='w-4/5 md:w-1/4 float-left mb-4'/>
        <Button className='float-right ml-2'> Add </Button>
        <Table scroll={{x: true}} dataSource={data} columns={columns}/>
    </div>
  )
}
