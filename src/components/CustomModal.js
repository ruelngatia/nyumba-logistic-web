import { Modal } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function CustomModal({width, open, children, title, setClose, okText}) {

  const location = useLocation()
  const navigate = useNavigate()

  const handleCancel = () => {
    setClose(!open)
    navigate(location.pathname)
  }

  return (
    <Modal open={open} width={width} title={title} okText={okText} onCancel={handleCancel}>
        {children}
    </Modal>
  )
}
