import { Form, Input, Tree } from 'antd'
import React from 'react'

export default function AddRightsForm() {

    const treeData = [
        {
            title: 'Dashboard',
            key: '1.0',
            children: [
                {
                    title: 'Unit',
                    key: '1.1'
                },
                {
                    title: 'Tenants',
                    key: '1.2'
                },
                {
                    title: 'vaccant tooms',
                    key: '1.3'
                },
                {
                    title: 'Innvoices',
                    key: '1.4'
                },
                {
                    title: 'Expected earnings',
                    key: '1.5'
                },
                {
                    title: 'Total earnings',
                    key: '1.6'
                },
                {
                    title: 'Unpaid bills',
                    key: '1.7'
                },
                {
                    title: 'Potential tenant',
                    key: '1.8'
                }
            ]
        },
        {
            title: 'Property',
            key: '2.0',
            children: [
                {
                    title: 'Zing',
                    key: '2.1'
                }
            ]
        },
    ]

  return (
    <Form>
        <label>Name : </label>
            <Input value={'John doe'} disabled/>
            <Tree 
                defaultExpandAll
                treeData={treeData}
                checkable
            />
    </Form>
  )
}
