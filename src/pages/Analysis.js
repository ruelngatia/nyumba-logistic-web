import { Tabs } from 'antd'
import React from 'react'
import AnalysisView from '../layouts/AnalysisView'
import SessionsLayout from '../layouts/SessionsLayout';
import OutstandingBillsLayout from '../layouts/OutstandingBillsLayout';
import RateControlLayout from '../layouts/RateControlLayout';

export default function Analysis() {

    const items = [
        {
            label: 'View',
            key: '1',
            children: <AnalysisView/>
        },
        {
            label: 'Sessions',
            key: '2',
            children: <SessionsLayout/>
        },
        {
            label: 'Outstanding bills',
            key: '3',
            children: <OutstandingBillsLayout/>
        },
        {
            label: 'Rate card',
            key: '4',
            children: <RateControlLayout/>
        },
        
    ]

  return (
    <div className='m-2'>
        <Tabs items={items} defaultActiveKey='1' />
    </div>
  )
}
