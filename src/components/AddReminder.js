import { DatePicker, Radio, Select, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import Modal from 'antd/es/modal/Modal'
import React from 'react'

export default function AddReminder({isAddReminder,setIsAddReminder}) {
  return (
    <div>
        <Modal className='space-y-2' width={550} title='Reminder' okType='default' onCancel={()=>setIsAddReminder(!isAddReminder)} open={isAddReminder}>
            <Select>To:</Select>
            <br/>
            <Space align='start'>
                <label>Description</label>
                <TextArea/>
            </Space>
            <Space className='space-y-2'>
                <label>Time:</label>
                <div className='space-y-2'>
                    <>
                      <Radio/>
                      <span>Fixed</span>
                      <DatePicker/>
                    </>
                    <br/>
                    <>
                        <Radio/>
                        <span className='px-1'>Range from</span>
                        <DatePicker />
                        <span className='px-1'>to</span>
                        <DatePicker/>
                    </>
                </div>
            </Space>
        </Modal>
    </div>
  )
}
