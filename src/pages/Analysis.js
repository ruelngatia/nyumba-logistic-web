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

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: '',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: '',
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
  return (
    <div className='m-2'>
        <Tabs items={items} defaultActiveKey='1'/>
    </div>
  )
}
