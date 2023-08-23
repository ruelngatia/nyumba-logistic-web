import React, { useState } from 'react'
import DashCard from '../components/DashCard'
import building from '../assets/two-city-buildings-svgrepo-com.svg'
import NoticeTable from '../components/NoticeTable'
import ReminderTable from '../components/ReminderTable'
import { Button } from 'antd'
import AddReminder from '../components/AddReminder'

export default function Dashboard() {

  const [isAddReminder, setIsAddReminder] = useState(false);
  
  return (
    <div className='m-8'>
      <section>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4  gap-4'>
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
        <ReminderTable setIsAddReminder={setIsAddReminder} isAddReminder={isAddReminder}/>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-2'>
          <Button>Potential </Button>
          <Button>Add Tenants</Button>
          <Button>Add Payment</Button>
          <Button>Add Billing</Button>
        </div>
      </section>
      <AddReminder isAddReminder={isAddReminder} setIsAddReminder={setIsAddReminder}/>
    </div>
  )
}
