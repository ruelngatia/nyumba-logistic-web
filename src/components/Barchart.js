import React from 'react'
import { Bar, BarChart, CartesianGrid, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function Barchart() {
    const data = [
        {
          month: "April",
          Expected: 400,
          Collected: 343,
          Unpaid: 460,
        },
        {
          month: "May",
          Expected: 645,
          Collected: 456,
          Unpaid: 400,
        },
        {
          month: "June",
          Expected: 908,
          Collected: 573,
          Unpaid: 234,
        }
     
      ];
  return (
    <div>
       <ResponsiveContainer className='w-1/2'  height={400}>
        <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={<Label value={'Month'}/>} />
          <YAxis label={<Label value={'Month Collection'} angle={270} position={'center'}/>}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Expected" fill="#8884d8" />
          <Bar dataKey="Collected" fill="#82ca9d" />
          <Bar dataKey="Unpaid" fill="#454278" />
        </BarChart>
       </ResponsiveContainer>
    </div>
  )
}
