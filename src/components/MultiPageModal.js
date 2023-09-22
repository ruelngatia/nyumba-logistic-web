import { Modal } from 'antd'
import React, { useState } from 'react'
import CustomModalFooter from './CustomModalFooter'
import { useLocation, useNavigate } from 'react-router-dom'

export default function MultiPageModal({childred, open, setIsOpen, title}) {

    const [page,setPage] = useState(0)
    const location = useLocation()
    const navigate = useNavigate()
    const handleafterClose = ()=>{
      setPage(0)
    }

    const handleCancel = () => {
      setIsOpen(!open)
      navigate(location.pathname)
    }

  return (
    <Modal width={800} afterClose={handleafterClose} title={title} open={open} onCancel={handleCancel} footer={<CustomModalFooter setIsOpen={setIsOpen} setPage={setPage} page={page}/>}>
        {childred[page]}
    </Modal>
  )
}
