import { Button, Card, Statistic, Table } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import CustomRangePicker from "../components/CustomRangePicker";

export default function InvoiceViewLayout() {
  const columns = [
    {
      title: "No",
      key: "no",
      dataIndex: "no",
    },
    {
      title: "Invoice number",
      key: "invoiceNumber",
      dataIndex: "invoiceNumber",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Date Created",
      key: "dateCreated",
      dataIndex: "dateCreated",
      filterDropdown: <CustomRangePicker />,
    },
    {
      title: "Tenant",
      key: "tenant",
      dataIndex: "tenant",
    },
    {
      title: "Account No",
      key: "accountNumber",
      dataIndex: "accountNumber",
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "Bill",
      key: "bill",
      dataIndex: "bill",
    },
    {
      title: "Room",
      key: "room",
      dataIndex: "room",
    },
    {
      title: "More",
      key: "",
      render: () => {
        <Button>More</Button>;
      },
    },
  ];

  const subcolumns = [
    {
      title: 'No',
      key: 'no',
      dataIndex: 'no'
    },
    {
      title: 'Date',
      key: 'date',
      dataIndex: 'date'
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description'
    },
    {
      title: 'Amount',
      key: 'amount',
      dataIndex: 'amount'
    },

  ] 

  const data = [
    {
      no: "1",
      invoiceNumber: "p015",
      status: "paid",
      dateCreated: "22/10/2023",
      tenant: "John doe",
      accountNumber: "2561",
      description: "water",
      bill: "KSH 400",
      room: "A4",
    },
  ];

  const expandable = () => {
    return <Table columns={subcolumns} scroll={{ x: true }} />;
  };

  return (
    <div className="text-left">
      <Search className="w-4/5 md:w-1/4 " placeholder="Search" />
      <div className="flex flex-col xl:flex-row gap-3 mt-2">
        <Table
          dataSource={data}
          rowSelection={{ type: "checkbox" }}
          className="w-full xl:w-5/6"
          columns={columns}
          scroll={{ x: true }}
          expandable={{
            expandedRowRender: expandable,
            defaultExpandedRowKeys: ["0"],
          }}
        />
        <div className="w-2/3 xl:w-1/3 md:w-fit grid grid-col-2 md:grid-cols-2 xl:grid-cols-1 mt-4 xl:ml-3 gap-2 ">
          <Button>Send Invoice</Button>
          <Button>Close Bill</Button>
          <Card>
            <Statistic
              className="flex flex-row-reverse gap-2 items-center"
              title="Active invoices"
              value={28}
              valueStyle={{
                color: "#3f8600",
              }}
            />
          </Card>
          <Card>
            <Statistic
              className="flex flex-row-reverse gap-2 items-center"
              title="In-active invoices"
              value={11}
              valueStyle={{
                color: "#cf1322",
              }}
            />
          </Card>
          <Button>Download</Button>
          <Button>Re-innvoice</Button>
        </div>
      </div>
    </div>
  );
}
