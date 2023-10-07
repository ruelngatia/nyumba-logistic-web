import React, { useState } from 'react'
import DashCard from '../components/DashCard'
import building from '../assets/two-city-buildings-svgrepo-com.svg'
import support from '../assets/technical-support-svgrepo-com.svg'
import rooms from '../assets/roomsSvg.svg'
import notification from '../assets/notifications-svgrepo-com.svg'
import userHome from '../assets/homeUser.svg'
import NoticeTable from '../components/NoticeTable'
import ReminderTable from '../components/ReminderTable'
import { Button } from 'antd'
import CustomModal from '../components/CustomModal'
import ReminderForm from '../forms/ReminderForm'
import PotentialTenantForm from '../forms/PotentialTenantForm'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

  const [isAddReminder, setIsAddReminder] = useState(false);
  const [isAddPotential, setIsAddPotential] = useState(false);

  const navigate = useNavigate()
  
  return (
    <div className='m-8'>
      <section>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4  gap-4'>
          <DashCard href={'/property'} src={building} text={'Units'}/>
          <DashCard href={'/tenants'} src={userHome} text={'Tenants'}/>
          <DashCard href={'/property'} src={rooms} text={'Vaccant rooms'}/>
          <DashCard href={'/notifications'} src={notification} text={'Notifications'}/>
          <DashCard href={'/?modal=expectedEarnings'} text={'Expected Earnings'}/>
          <DashCard text={'Total Earnings'}/>
          <DashCard text={'Unpaid bills'}/>
          <DashCard src={support} text={'Support'}/>
        </div>
      </section>
      <section className='flex flex-col lg:flex-row gap-4 mt-10'>
        <NoticeTable />
        <ReminderTable setIsAddReminder={setIsAddReminder} isAddReminder={isAddReminder}/>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-2'>
          <Button onClick={()=> setIsAddPotential(!isAddPotential)}>Potential </Button>
          <Button onClick={()=>navigate("/?modal=addTenant")}>Add Tenants</Button>
          <Button onClick={()=> navigate("/finances?modal=addPayment")}>Add Payment</Button>
          <Button>Add Billing</Button>
        </div>
      </section>
      <CustomModal title={'Add Reminder'} open={isAddReminder} children={<ReminderForm/>} okText={"Add"} setClose={setIsAddReminder}/>
      <CustomModal title={"Add potential client"} open={isAddPotential} children={<PotentialTenantForm/>} okText={"Add"} setClose={setIsAddPotential}/>
    </div>
  )
}
