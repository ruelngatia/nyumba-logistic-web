import React from 'react'
import DashCard from '../components/DashCard'
import building from '../assets/two-city-buildings-svgrepo-com.svg'
import NoticeTable from '../components/NoticeTable'
import ReminderTable from '../components/ReminderTable'
import { Button } from 'antd'

export default function Dashboard() {
  return (
    <div className='m-8'>
      <section>
        <div className='grid grid-cols-2 lg:grid-cols-4  gap-4'>
          <DashCard src={building} text={'Units'}/>
          <DashCard text={'Tenants'}/>
          <DashCard text={'Vaccant rooms'}/>
          <DashCard text={'Invoices'}/>
          <DashCard text={'Expected Earnings'}/>
          <DashCard text={'Total Earnings'}/>
          <DashCard text={'Unpaid bills'}/>
          <DashCard text={'Support'}/>
        </div>
      </section>
      <section className='flex flex-col lg:flex-row gap-4 mt-10'>
        <NoticeTable />
        <ReminderTable />
        <div className='lg:space-y-2 space-x-3 flex flex-row flex-wrap gap-2 lg:flex-col pl-2 '>
          <Button>Potential Tenants</Button>
          <Button>Add Tenants</Button>
          <Button>Add Payment</Button>
          <Button>Add Billing</Button>
        </div>
      </section>
    </div>
  )
}
