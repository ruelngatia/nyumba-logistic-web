import { Button } from 'antd'
import React from 'react'

export default function CustomModalFooter({page, setPage, setIsOpen}) {

  const handleClose = ()=>{
    setIsOpen(false)
  }


  return (
    <div>
        {page === 0 ? <Button onClick={handleClose}>Cancel</Button>
        : <Button onClick={() => setPage(page - 1)}>Back</Button> }
        {page === 2? <Button>Done</Button> :<Button onClick={() => setPage(page + 1)}>Continue</Button>}
   
    </div>
  )
}
