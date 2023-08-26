import { Dropdown, Table, Button, Space } from "antd";
import Search from "antd/es/input/Search";
import React from "react";

export default function PaymentsLayout() {
  const years = [
    {
      key: "1",
      label: 2010,
    },
    {
      key: "2",
      label: 2010,
    },
  ];

  const month =[ 
    {
      key: "1",
      label: "1"
    },
    {
      key: "2",
      label: "2"
    },
    {
      key: "3",
      label: "3"
    },
    {
      key: "4",
      label: "4"
    },
  ]

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

        <Space className="hidden md:inline-flex">
          <Dropdown menu={{ items: month }}>
            <Button>
              <Space>
                Month
                {/* <DownOutlined /> */}
              </Space>
            </Button>
          </Dropdown>
          <Dropdown menu={{items: years }}>
            <Button>
              <Space>
                Year
                {/* <DownOutlined /> */}
              </Space>
            </Button>
          </Dropdown>
        </Space>

        <Button className="ml-4">
          + Add Payment
        </Button>
  
      </div>

      <Space className="inline-flex md:hidden mt-3">
          <Dropdown menu={{ items: month }}>
            <Button>
              <Space>
                Month
                {/* <DownOutlined /> */}
              </Space>
            </Button>
          </Dropdown>
          <Dropdown menu={{items: years }}>
            <Button>
              <Space>
                Year
                {/* <DownOutlined /> */}
              </Space>
            </Button>
          </Dropdown>
        </Space>

      <div className="mt-6 md:mt-8">
        <Table columns={columns} dataSource={data} scroll={{ x: true }} />
      </div>
    </div>
  );
}
