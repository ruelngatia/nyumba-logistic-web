import { Dropdown, Table } from 'antd'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomModal from '../components/CustomModal'
import RefundComponent from '../components/RefundComponent';
import DamageForm from '../forms/DamageForm';

export default function FinanceRefundsLayout() {

    const [isRefund,setIsRefund] = useState(false)
    const [isDamage,setisDamage] = useState(false)

    const actionItems = [
       {
        label: 'Damages',
        key: '1',
        onClick: (() => setIsRefund(true))
       },
       {
        label: 'Refund',
        key: '2',
        onClick: (() => setisDamage(true))
       },
    ]

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
            title: 'Room',
            key: 'room',
            dataIndex: 'room'
        },
        {
            title: 'Refundable Amount',
            key: 'refundableAmount',
            dataIndex: 'refundableAmount'
        },
        {
            title: 'Action',
            key: 'action',
            render: ( () => <Dropdown menu={{items: actionItems}} ><ArrowDropDownIcon/></Dropdown> )
        },
    ]
    const data = [
        {
            no: '1',
            name: 'John doe',
            room: 'A5',
            refundableAmount: '1000',
        }
    ]

  return (
    <div className='ml-2'>
        <Table columns={columns} dataSource={data} scroll={{x: true}}/>
        <CustomModal title={"Refund funds"} okText={"Pay"} open={isRefund} setClose={setIsRefund} children={<RefundComponent/>}/>
        <CustomModal title={"Add Damages"} okText={"Add"} open={isDamage} setClose={setisDamage} children={<DamageForm/>}/>
    </div>
  )
}
