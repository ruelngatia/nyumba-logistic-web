import { Button, Table } from 'antd'
import Search from 'antd/es/input/Search'
import React, { useState } from 'react'
import CustomModal  from '../components/CustomModal'
import AddUnitForm from '../forms/AddUnitForm'

export default function UnitsLayout() {

   const [isAddBuilding,setIsAddBuilding] = useState(false)

    const columns = [
        {
           title: 'No',
           key: 'no',
           dataIndex: 'no'
        },
        {
            title: 'House',
            key: 'house',
            dataIndex: 'house'
         },
         {
            title: 'Description',
            key: 'description',
            dataIndex: 'description'
         },
         {
            title: 'Rent',
            key: 'rent',
            dataIndex: 'rent'
         },
         {
            title: 'Deposit',
            key: 'deposit',
            dataIndex: 'deposit'
         },
         {
            title: 'Paybill',
            key: 'paybill',
            dataIndex: 'paybill'
         },
         {
            title: 'Prefix',
            key: 'prefix',
            dataIndex: 'prefix'
         },
         {
            title: 'Action',
            key: 'action',
            dataIndex: '',
            render: () => <Button onClick={handleUpdate}>Update</Button>
         },
    ]

    const handleUpdate = ()=>{
      setIsAddBuilding(true)
    }

    const data = [
        {
            key: '1',
            no: '2',
            house: 'john doe',
            description: 'P.O BOX',
            rent: 'somewhere',
            deposite: '0712345678',
            paybill: 'message',
            prefix: 'German',
        }
    ]

  return (
    <div className='p-1 lg:p-6'>
        <Search placeholder='Search' className='w-4/5 md:w-1/4 float-left mb-4'/>
        <Button className='float-right ml-2' onClick={() => setIsAddBuilding(true)}> Add </Button>
        <Table scroll={{x: true}} dataSource={data} columns={columns}/>
        <CustomModal title={"Add unit"} open={isAddBuilding} setClose={setIsAddBuilding}width={700} children={<AddUnitForm/>}/>
    </div>
  )
}
