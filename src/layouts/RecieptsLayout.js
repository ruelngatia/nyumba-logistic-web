import { Download } from '@mui/icons-material'
import { Dropdown, Table } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'
import CustomRangePicker from '../components/CustomRangePicker'

export default function RecieptsLayout() {
    const items = [
        {
            key: "1",
            label: "All"
        },
        {
            key: "2",
            label: "Selected"
        }
    ]

    const columns = [
        {
            title: 'No',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: "Time Stamp",
            key: 'timeStamp',
            dataIndex: 'timeStamp'
        },
        {
            title: "Receipt Number",
            key: 'receiptNumber',
            dataIndex: 'receiptNumber'
        },
        {
            title: "Amount",
            key: 'amount',
            dataIndex: 'amount'
        },
        {
            title: "Tenant",
            key: 'tenant',
            dataIndex: 'tenant'
        },
        {
            title: "Date",
            key: 'date',
            dataIndex: 'date',
            filterDropdown: <CustomRangePicker/>
        }
    ]

    const data = [
        {
            no: "1",
            timeStamp: "1/4/2023 12:44:14",
            receiptNumber: "Ao7",
            amount: "KSH 4000",
            tenant: "John doe"

        }
    ]


  return (

    <div>
        <div className='flex flex-row justify-between'>
            <Search className='w-4/5 md:w-1/4 ' placeholder='search' size='middle'/>
            <span className='float-right'>
                <Dropdown.Button
                    icon={<Download fontSize='1.5em'/>}
                    menu={{items}}
                    // loading={true}
                >
                    Downlaod
                </Dropdown.Button>
            </span>
        </div>
        <div className='mt-4'>
            <Table columns={columns} dataSource={data} scroll={{x: true}}/>
        </div>
    </div>
  )
}
