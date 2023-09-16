import { Button, Card, Input, List, Radio, Space } from 'antd'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

export default function AddInvoiceLayout() {

    const [billingType,setBillingType] = useState(1)
    const [ToAll,setToAll] = useState(1)
    const listItemVariants = {
        hidden: { opacity: 1, x: 1000 },
        visible: { opacity: 1, x: 0 },
      };

  return (
    <div className='text-left ml-4'>
        <h2 className='text-xl font-semibold '>Billing type</h2>
        <div>
            <Radio.Group onChange={(e) => setBillingType(e.target.value)} value={billingType}>
                <Radio value={1}>Fixed bill</Radio>
                <Radio value={2}>Rate bill</Radio>
            </Radio.Group>
            <Input className='w-64 mr-1'/>
            <Button>Save</Button>
        </div>
        <h2 className='text-xl font-semibold mt-2 mb-1'>TO Bill</h2>
        <div className='ml-4'>
            <Radio.Group onChange={(e) => setToAll(e.target.value)} value={ToAll}>
                <Radio value={1}>All</Radio>
                <Radio value={2}>Select</Radio>
            </Radio.Group> 
        </div>
        <div className='mt-8'>
            <Button>Find</Button>
        </div>
        <List 
            grid={{
                gutter: 16,
                sm: 2,
                xl: 3,
                xxl: 4
            }}
            dataSource={[{titl: 'that'},{titl: 'that'},{titl: 'that'},{titl: 'that'}]}
            renderItem={()=>
                <motion.div
                initial="hidden"
                animate="visible"
                variants={listItemVariants}
                transition={{ duration: 2.5 }}
                >
                    <Card className='m-2'>
                        <Space>
                            <label>T2</label>
                            <span>a6</span>
                        </Space>
                        <br/>
                        <label>Electricty</label>
                        <br/>
                        <Space>
                            <Input />
                            <Button>Bill</Button>
                        </Space>
                    </Card>
                </motion.div>
            }
        />
    </div>
  )
}
