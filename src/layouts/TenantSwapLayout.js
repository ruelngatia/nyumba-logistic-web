import { Button, Table } from 'antd'
import Search from 'antd/es/input/Search'
import React, { useState } from 'react'
import CustomModal from '../components/CustomModal'
import TenantSwapForm from '../forms/TenantSwapForm';

export default function TenatSwapLayout() {

   const [isSwap,setIsSwap] = useState(false);

    const columns = [
        {
           title: 'No',
           key: 'no',
           dataIndex: 'no'
        },
        {
           title: 'Timestamp',
           key: 'timestamp',
           dataIndex: 'timestamp'
        },
        {
            title: 'Tenant',
            key: 'tenant',
            dataIndex: 'tenant'
         },
         {
            title: 'Before',
            key: 'before',
            dataIndex: 'before'
         },
         {
            title: 'After',
            key: 'after',
            dataIndex: 'after'
         },
         {
            title: 'Previous',
            key: 'previous',
            dataIndex: 'previous'
         },
         {
            title: 'User',
            key: 'user',
            dataIndex: 'user'
         },
        
    ]

    const data = [
        {
            key: '1',
            no: '1',
            tenant: 'john doe',
            before: '2/3/2000',
            after: '2/3/2000',
            previous: 'test',
            user: 'mine'
        }
    ]

  return (
    <div className='p-1 lg:p-6'>
        <Search placeholder='Search' className='w-4/5 md:w-1/4 float-left mb-4'/>
        <Button className='float-right ml-2' onClick={() => setIsSwap(true)}> Swap </Button>
        <Table scroll={{x: true}} dataSource={data} columns={columns}/>
        <CustomModal title={"Swap Room"} children={<TenantSwapForm/>} open={isSwap} setClose={setIsSwap} />
    </div>
  )
}
