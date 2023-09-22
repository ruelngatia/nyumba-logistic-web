import {Table, Button } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import CustomRangePicker from "../components/CustomRangePicker";

export default function PaymentsLayout() {

  const columns = [
    {
      title: "No",
      key: "no",
      dataIndex: "no",
    },
    {
      title: "Time Stamp",
      key: "timeStamp",
      dataIndex: "timeStamp",
    },
    {
      title: "Tenant",
      key: "tenent",
      dataIndex: "tenent",
    },
    {
      title: "Reciept",
      key: "reciept",
      dataIndex: "reciept",
    },
    {
      title: "Nature",
      key: "nature",
      dataIndex: "nature",
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount"
    },
    {
      title: "Date paid",
      key: "datePaid",
      dataIndex: "datePaid",
      filterDropdown: <CustomRangePicker/>
    },
    {
      title: "User",
      key: "user",
      dataIndex: "nature"
    },
    {
      title: "Nature",
      key: "nature",
      dataIndex: "nature",
      filters: [
        {
          text: 'E-Payment',
          value: 'e-payment'
        },
        {
          text: 'Cash',
          value: 'cash'
        },
      ]
    }
  ];

  const data = [
    {
      no: "1",
      timeStamp: "1/4/2023 12:44:14",
      receiptNumber: "Ao7",
      amount: "KSH 4000",
      tenant: "John doe",
    },
  ];

  return (
    <div>
      <div className="flex flex-row justify-between">
        <Search
          className="w-4/5 md:w-1/4 "
          placeholder="search"
          size=""
        />

        <Button className="ml-4">
          + Add Payment
        </Button>
  
      </div>

      <div className="mt-6 md:mt-8">
        <Table columns={columns} dataSource={data} scroll={{ x: true }} />
      </div>
    </div>
  );
}
