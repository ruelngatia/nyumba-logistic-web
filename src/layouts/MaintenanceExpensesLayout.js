import { Button, Space, Table } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import CustomRangePicker from "../components/CustomRangePicker";
import CustomModal from "../components/CustomModal";
import MaintenanceCostForm from "../forms/MaintenanceCostForm";

export default function MaintenanceExpensesLayout() {

    const [isAdd, setIsAdd] = useState(false)
    const columns = [
       {
        title: 'No',
        key: 'no',
        dataIndex: 'no'
       }, 
       {
        title: 'Timestamp',
        key: 'timestamp',
        dataIndex: 'timestamp'
       },
       {
        title: 'Service',
        key: 'service',
        dataIndex: 'service'
       },
       {
        title: 'Cost',
        key: 'cost',
        dataIndex: 'cost'
       },
       {
        title: 'Date',
        key: 'date',
        dataIndex: 'date',
        filterDropdown: <CustomRangePicker/>
       },
       {
        title: 'User',
        key: 'user',
        dataIndex: 'user'
       },
       {
        title: 'Description',
        key: 'description',
        dataIndex: 'description'
       },
    ]

  return (
    <div className="p-6">
      <Search placeholder="Search" className="w-4/5 md:w-1/4 float-left mb-4" />
      <Space className="float-right ml-2">
        <span>Total Maintenance Cost: KSH 1000</span>
        <Button onClick={() => setIsAdd(true)}> Add Expense</Button>
        <Button> Download</Button>
      </Space>
      <div className="w-full lg:w-5/6">
        <Table scroll={{ x: true }} columns={columns} />
      </div>
      <CustomModal open={isAdd} setClose={setIsAdd} okText={'Add'} children={<MaintenanceCostForm/>} title={'Add maintenance cost'}/>
    </div>
  );
}
