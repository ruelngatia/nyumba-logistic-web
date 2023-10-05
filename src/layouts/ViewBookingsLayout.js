import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Dropdown, Table } from 'antd'
import React from 'react'

export default function ViewBookingsLayout() {

    const menuItems = [
        {
            label: 'Claim',
            key: '1'
        },
        {
            label: 'Refund',
            key: '2'
        }
    ]

    const columns = [
        {
            title: 'No',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: 'TimeStamp',
            key: 'timestamp',
            dataIndex: 'timestamp'
        },
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: 'Amount',
            key: 'amount',
            dataIndex: 'amount'
        },
        {
            title: 'Description',
            key: 'description',
            dataIndex: 'description'
        },
        {
            title: 'Action',
            key: 'action',
            render: (() => <Dropdown menu={{items: menuItems}}><ArrowDropDownIcon/></Dropdown>)
        },
    ]

    const data = [
        {
            no: '1',
            name: 'John doe',
            amount: 'KSH 400',
            description: 'water'
        }
    ]

  return (
    <div>
        <Button className=' float-right mb-2'> + Add Booking</Button>
        <Table columns={columns} dataSource={data}/>
    </div>
  )
}
