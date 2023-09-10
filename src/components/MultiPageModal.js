import { Modal } from 'antd'
import React, { useState } from 'react'
import CustomModalFooter from './CustomModalFooter'

export default function MultiPageModal({childred, open, setIsOpen, title}) {

    const [page,setPage] = useState(0)
    const handleafterClose = ()=>{
      setPage(0)
    }

  return (
    <Modal width={800} afterClose={handleafterClose} title={title} open={open} onCancel={() => setIsOpen(!open)} footer={<CustomModalFooter setIsOpen={setIsOpen} setPage={setPage} page={page}/>}>
        {childred[page]}
    </Modal>
  )
}
