import { Table, Typography } from 'antd'
import React from 'react'

export default function TenantStatementLayout() {

    const columns = [
        {
            title: 'No',
            key: 'no',
            index: 'no'
        },
        {
            title: 'Room',
            key: 'room',
            index: 'room'
        },
        {
            title: 'Transaction details',
            key: 'transactionDetails',
            index: 'transactionDetails'
        },
        {
            title: 'Bill (Debit)',
            key: 'bill',
            index: 'bill'
        },
        {
            title: 'Paid amount (Credit)',
            key: 'paidAmount',
            index: 'paidAmount'
        },
        {
            title: 'Balance',
            key: 'balance',
            index: 'balance'
        }
    ]

  return (
    <div className='ml-0 lg:ml-6'>
        <div className='text-left mb-4 float-left grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-32  lg:gap-x-72  xl:gap-x-96 gap-y-8'>
            <Typography>Building: </Typography>
            <Typography>Current/Last account: </Typography>
            <Typography>Tenant: </Typography>
            <Typography className=''>As of: </Typography>
        </div>
        <div>
            <Table scroll={{x: true}} columns={columns} />
        </div>
    </div>
  )
}
