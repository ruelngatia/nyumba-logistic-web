import React from 'react'
import { Button, Form, Progress, Select, TreeSelect } from 'antd'
import { DatePicker } from 'antd';

export default function ReportsForm() {

    const {RangePicker} = DatePicker;

    const reportOptions = [
        {
            value: 'Payments',
            label: 'Payments'
        },
        {
            value: 'Billing',
            label: 'Billing'
        },
        {
            value: 'Monthly',
            label: 'Monthly'
        },
        {
            value: 'Stabalizer',
            label: 'Stabalizer'
        },
        {
            value: 'Tenant History',
            label: 'tenantHistory'
        },
        {
            value: 'Negative Payment',
            label: 'negativePayment'
        },
        {
            value: 'Room Statement',
            label: 'roomStatement'
        },
        {
            value: 'Refunds',
            label: 'refunds'
        },
        {
            value: 'Vaccatted',
            label: 'vaccated'
        },
        {
            value: 'Room Swap',
            label: 'roomSwap'
        },
        {
            value: 'Expenses',
            label: 'expenses'
        },
        {
            value: 'New tenants',
            label: 'newTenants'
        },
        {
            value: 'Debts AS of filter',
            label: 'deptsAsOfFilter'
        },
        {
            value: 'Reversed Payments',
            label: 'reversedPayments'
        },

    ]

    const groupingOptions = [  
        {
            value: 'Payments',
            title: 'Payments',
            children: [
                {
                    value: 'Per Paybill',
                    title: 'Per Paybill'
                },
                {
                    value: 'Per User',
                    title: 'Per User'
                },
                {
                    value: 'Per Nature',
                    title: 'Per Nature'
                },
                {
                    value: 'Per Day',
                    title: 'Per Day'
                },
                {
                    value: 'Per Room Type',
                    title: 'Per Room Type'
                },
                {
                    value: 'All',
                    title: 'All'
                }
            ]
        },
        {
           value: 'Stabalizer',
           title: 'Stabalizer',
        //    disabled: true,
           children: [
            {
                title: 'Per User',
                value: 'Per User'
            },
            {
                title: 'All',
                value: 'All'
            }
           ] 
        },
        {
            value: 'Negative Payment Report',
            title: 'Negative Payment Report',
            children: [
                {
                    title: 'Per User',
                    value: 'Per User'
                },
                {
                    title: 'All',
                    value: 'All'
                }
            ]
        }  
    ]

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 10,
        },
      };

  return (
    <div>
        <Form {...layout} className='' layout='vertical' >
            <Form.Item name={"reportType" } label="Selct Report Type" rules={[{required: true, message: 'Report type is required'}]}>
                <Select placeholder='Select report type' options={reportOptions} />
            </Form.Item>

            <Form.Item name={"group" } label="Grouping" rules={[{required: true, message: 'Group type is required'}]}>
                <TreeSelect placeholder='Select Grouping' treeData={groupingOptions} />
            </Form.Item>

            <Form.Item name={"dateRange"} label="Date Range" rules={[{required: true, message: 'Please select a date range'}]}>
                <RangePicker />
            </Form.Item>

            <Form.Item hidden={true}>
                <label>Downloading...</label>
                <Progress percent={40}/>
            </Form.Item>

            <Form.Item>
                <Button>Generate Report</Button>
            </Form.Item>
        </Form>
    </div>
  )
}
