import { Checkbox, Dropdown, Space, Switch, Table } from 'antd'
import Search from 'antd/es/input/Search'
import React, { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import CustomModal from '../components/CustomModal'
import SettingsAddUserForm from '../forms/SettingsAddUserForm';

export default function SettingsViewLayout() {

    const [isEdit, setIsEdit] = useState(false)
    const items = [
        {
            label: (
                <Space>
                    <span>Active</span>
                    <Switch  size='small'/>
                </Space>
            ),
            key: '1'
        },
        {
            label: 'Edit',
            key: '2',
            icon: <EditIcon/>,
        },
        {
            label: (
                <Checkbox>2 FA</Checkbox>
            ),
            key: '3'
        }

    ]

    const columns = [
        {
            title: 'No',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: 'Building',
            key: 'building',
            dataIndex: 'building'
        },
        {
            title: 'Role',
            key: 'role',
            dataIndex: 'role'
        },
        {
            title: 'Phone',
            key: 'phone',
            dataIndex: 'phone'
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email'
        },
        {
            title: 'Options',
            key: 'options',
            // dataIndex: 'options'
            render: ()=>(
                <Dropdown menu={{items, onClick}} >
                    <MoreHorizIcon/>
                </Dropdown>
            )
        },
    ]

    const data = [
        {
            no: 1,
            name: 'John doe',
            building: 'Zar',
            role: 'caretaker',
            phone: '0712345678',
            email: 'doe@gmail.com'
        }
    ]

    const onClick = ({ key }) => {
        if(key === '2'){
            setIsEdit(true)
        }
      };

  return (
    <div className='p-1 lg:p-6'>
        <Search placeholder='Search' className='w-4/5 md:w-1/4 float-left mb-4'/>
        <Table scroll={{x: true}} columns={columns} dataSource={data}/>
        <CustomModal width={700} title={'Edit user'} open={isEdit} setClose={setIsEdit} okText={'Save'} children={<SettingsAddUserForm/>}/>
    </div>
  )
}
