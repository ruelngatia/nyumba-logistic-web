import { Button, Checkbox, Table } from 'antd'
import React, { useState } from 'react'
import CustomModal from '../components/CustomModal'
import ClaimsTableView from '../layouts/ClaimsTableView'

export default function InitialBillForm() {

    const [isBooking, setIsBooking] = useState(false)

    const columns = [
        {
            title: 'Bill',
            key: 'bill',
            dataIndex: 'bill',
            width: '35%'
        },
        {
            title: 'Amount',
            key: 'amount',
            dataIndex: 'amount',
            editable: true
        }
    ]
    const data = [
        {
            bill: "Water",
            amount: "500"
        },
        {
            bill: "Electricity",
            amount: "700"
        },
        {
            bill: "Garbage",
            amount: "150"
        },
        {
            bill: "Security",
            amount: "500"
        }

    ]
  return (
    <div>
        <Checkbox> Rent KSH 2,000</Checkbox>
        <br/>
        <Checkbox> Deposit KSH 2,000</Checkbox>
        <Button className='float-right mb-2' onClick={() => setIsBooking(true)}>Booking ?</Button>
        <Table pagination={{hideOnSinglePage:true}} className='my-2 ' columns={columns} dataSource={data}/>
        <CustomModal title={"Booking list"} open={isBooking} setClose={setIsBooking} children={<ClaimsTableView/>}/>
    </div>
  )
}
