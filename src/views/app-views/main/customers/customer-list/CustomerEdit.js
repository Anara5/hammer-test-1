import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Form, Input, Row, Col, message, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const CustomerEdit = () => {
    const location = useLocation();
    const history = useHistory();
    const customer = location.state?.customer;
    const [form] = Form.useForm();

    useEffect(() => {
        if (customer) {
            form.setFieldsValue({
                name: customer.name,
                email: customer.email,
                username: customer.username,
                phoneNumber: customer.phone,
                website: customer.website,
                address: [customer.address.street, customer.address.suite].join(' '),
                city: customer.address.city,
                postcode: customer.address.zipcode,
                company: customer.company.name,
                catchPhrase: customer.company.catchPhrase,
                bs: customer.company.bs
            });
        }
    }, [customer, form]);

    const onFinish = (values) => {
        message.loading({ content: 'Updating...', key: 'updatable' });
        setTimeout(() => {
            message.success({ content: 'Customer updated!', key: 'updatable', duration: 2 });
            history.push(`${APP_PREFIX_PATH}/main/customers/customer-list`);
        }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <Form layout="vertical" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input a name' }]}
                    >
                        <Input prefix={<UserOutlined className="text-primary" />} />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input an email' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input a username' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                        label="Phone"
                        name="phoneNumber"
                        rules={[{ required: true, message: 'Please input a phone number' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                        label="Website"
                        name="website"
                        rules={[{ required: true, message: 'Please input a website' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please input an address' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                        label="City"
                        name="city"
                        rules={[{ required: true, message: 'Please input a city' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                        label="Postcode"
                        name="postcode"
                        rules={[{ required: true, message: 'Please input a postcode' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                        label="Company"
                        name="company"
                        rules={[{ required: true, message: 'Please input a company' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                        label="Catch Phrase"
                        name="catchPhrase"
                        rules={[{ required: true, message: 'Please input a catch phrase' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                        label="BS"
                        name="bs"
                        rules={[{ required: true, message: 'Please input BS' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button className="btn btn-primary bg-primary text-white" type="primary" htmlType="submit">
                    Update
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CustomerEdit;