import React, { useState } from 'react'
import { Upload } from 'antd';


export default function ImagesForm() {

    const [images,setImage] = useState([])

  return (
    <div className='grid grid-cols-4 gap-5'>
        <div>
            <Upload onChange={() => setImage([...images,1])} listType='picture-card'>{images.length === 0 && ('Agreement')}</Upload>
        </div>
        <div>
            <Upload onChange={() => setImage([...images,1])} listType='picture-card'>{images.length === 0 && ('Selfie')}</Upload>
        </div>
        <div>
            <Upload onChange={() => setImage([...images,1])} listType='picture-card'>{images.length === 0 && ('IdFront')}</Upload>
        </div>
        <div>
            <Upload onChange={() => setImage([...images,1])} listType='picture-card'>{images.length === 0 && ('IdBack')}</Upload>
        </div>
        <div>
            <Upload onChange={() => setImage([...images,1])} listType='picture-card'>{images.length === 0 && ('EXtra 1')}</Upload>
        </div>
        <div>
            <Upload onChange={() => setImage([...images,1])} listType='picture-card'>{images.length === 0 && ('Extra 2')}</Upload>
        </div>
    </div>
  )
}
