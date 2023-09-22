import { Card } from 'antd'
import React from 'react'

export default function ImageContainer({name}) {
  return (
    <div>
        <Card className='aspect-square' bordered />
        <label>{name}</label>
    </div>
  )
}
