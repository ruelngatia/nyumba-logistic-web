import { Modal } from 'antd'
import React from 'react'

export default function CustomModal({width, open, children, title, setClose, okText}) {
  return (
    <Modal open={open} width={width} title={title} okText={okText} onCancel={()=> setClose(false)}>
        {children}
    </Modal>
  )
}
