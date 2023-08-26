import { Tabs } from 'antd'
import React from 'react'

export default function Invoice() {

    const items = [
       {
        label: "View",
        key: "1",
        children: "ksdmskdc"
       },
       {
        label: "Add",
        key: "2",
        children: "ksdmgbdfgskdc"
       },
       {
        label: "Stabalize",
        key: "3",
        children: "ssd"
       }
    ]

  return (
    <div className='m-2'>
        <Tabs defaultActiveKey='1' items={items}/>
    </div>
  )
}
