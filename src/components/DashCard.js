import React from 'react'
import { Space } from 'antd'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useNavigate } from 'react-router-dom';

export default function DashCard({src, text, href}) {
    const navigate = useNavigate()

    const navigateTo = () => {
        navigate(href)
    }

  return (
    <div className='shadow-1xl hover:shadow-2xl rounded-md py-2'>
        <div>
            <div className='flex flex-row justify-between p-2'>
                <div className='w-20 mr-2 h-20'>
                    <img src={src} />
                </div>
                <Space direction='vertical' className='text-right float-right mr-3'>
                    <span className='text-2xl font-semibold'>10</span>
                    <br/>
                    <span>{text}</span>
                </Space>
            </div>
        </div>
        <div className='text-left border-t border-opacity-40 border-card-border  pr-4'>
            <Space direction='horizontal' className='float-right cursor-pointer' onClick={navigateTo}>
                <span>View details</span> 
                <span>
                    <PlayCircleOutlineIcon/>
                </span>
            </Space>
        </div>
    </div>
  )
}
