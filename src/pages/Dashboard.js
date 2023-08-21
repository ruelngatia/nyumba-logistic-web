import React from 'react'
import DashCard from '../components/DashCard'
import building from '../assets/two-city-buildings-svgrepo-com.svg'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 m-8 gap-4'>
      <DashCard src={building} text={'Units'}/>
      <DashCard text={'Tenants'}/>
      <DashCard text={'Vaccant rooms'}/>
      <DashCard text={'Invoices'}/>
      <DashCard text={'Vaccant rooms'}/>
      <DashCard text={'Invoices'}/>
      <DashCard src={building} text={'Units'}/>
      <DashCard text={'Tenants'}/>
    </div>
  )
}
