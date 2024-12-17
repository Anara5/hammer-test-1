import React, { useState, useEffect } from 'react';
import { Card, Table, Tooltip, message, Button, Avatar } from 'antd';
import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import CustomerView from './CustomerView';
import CustomerEdit from './CustomerEdit';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import Loading from 'components/shared-components/Loading';
import { Switch, Route, Link } from 'react-router-dom';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [customerProfileVisible, setCustomerProfileVisible] = useState(false);

    // Fetch customers on component mount
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (response.ok) {
                    const data = await response.json();
                    setCustomers(data);
                } else {
                    message.error('Failed to fetch customer data.');
                }
            } catch (error) {
                message.error('Error fetching customer data.');
            } finally {
                setLoading(false);
            }
        };

        fetchCustomers();
    }, []);

    // Delete a customer
    const deleteCustomer = (customerId) => {
        setCustomers(customers.filter((customer) => customer.id !== customerId));
        message.success(`Deleted customer ${customerId}`, 2);
    };

    // Show customer profile
    const showCustomerProfile = (customer) => {
        setSelectedCustomer(customer);
        setCustomerProfileVisible(true);
        console.log(customer);
    };

    // Close customer profile
    const closeCustomerProfile = () => {
        setSelectedCustomer(null);
        setCustomerProfileVisible(false);
    };

    // Define table columns
    const tableColumns = [
        {
            title: 'Customer',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="d-flex align-items-center">
                    <Avatar size={40} style={{ backgroundColor: '#87d068' }}>
                        {record.name[0]}
                    </Avatar>
                    <span className="ml-2">{record.name}</span>
                </div>
            ),
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Username',
            dataIndex: 'username',
            sorter: (a, b) => a.username.localeCompare(b.username),
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            render: (address) => `${address.street}, ${address.city}`,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, customer) => (
                <div className="text-right">
                    <Tooltip title="View">
                        <Button
                            type="primary"
                            className="m-2"
                            icon={<EyeOutlined />}
                            onClick={() => showCustomerProfile(customer)}
                            size="small"
                        />
                    </Tooltip>
                    <Tooltip title="Edit">
                        <Link
                            to={{
                                pathname: `${APP_PREFIX_PATH}/main/customers/customer-list/${customer.id}`,
                                state: { customer }, // Passing the customer object here
                            }}
                        >
                            <Button
                                type="default"
                                className="m-2"
                                icon={<EditOutlined />}
                                size="small"
                            />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => deleteCustomer(customer.id)}
                            size="small"
                        />
                    </Tooltip>
                </div>
            ),
        },
    ];

    return (
        <>
            <Switch>
                <Route path={`${APP_PREFIX_PATH}/main/customers/customer-list/:id`}>
                    <Card>
                        <CustomerEdit />
                    </Card>
                </Route>
                <Route path={`${APP_PREFIX_PATH}/main/customers/customer-list`}>
                    <Card bodyStyle={{ padding: '0px' }}>
                        {loading ? (
                            <Loading />
                        ) : (
                            <Card>
                                <Table columns={tableColumns} dataSource={customers} rowKey="id" />
                                <CustomerView
                                    data={selectedCustomer}
                                    visible={customerProfileVisible}
                                    close={closeCustomerProfile}
                                />
                            </Card>
                        )}
                    </Card>
                </Route>
            </Switch>
        </>
    );
};

export default CustomerList;
