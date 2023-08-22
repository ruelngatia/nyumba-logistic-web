import React from 'react'
import { Space } from 'antd'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function DashCard({src, text}) {
  return (
    <div className='border border-card-border rounded-md py-2'>
        <div>
            <div className='flex flex-row justify-between p-2'>
                <div className='w-32 mr-2 h-32'>
                    <img  src={src} />
                </div>
                <Space direction='vertical' className='text-right float-right mr-3'>
                    <span className='text-2xl font-semibold'>10</span>
                    <br/>
                    <span>{text}</span>
                </Space>
            </div>
        </div>
        <div className='text-left border-t border-card-border  pr-4'>
            <Space direction='horizontal' className='float-right'>
                <span>View details</span> 
                <span>
                    <PlayCircleOutlineIcon/>
                </span>
            </Space>
        </div>
    </div>
  )
}
