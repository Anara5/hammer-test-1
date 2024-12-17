import React from 'react';
import { Drawer, Divider, Avatar } from 'antd';
import { 
    MobileOutlined, 
    MailOutlined, 
    UserOutlined, 
    CalendarOutlined,
    GlobalOutlined
 } from '@ant-design/icons';

const CustomerView = ({ data, visible, close }) => {

    if (!data) {
        return null; // If no data is provided, return null to prevent rendering
    }

    // Accessing customer data
    const {
        name,
        username,
        email,
        phone,
        website,
        address,
        company
    } = data;
    const { street, suite, city, zipcode } = address || {};
    const { name: companyName, catchPhrase, bs } = company || {};

    return (
        <Drawer
            width={300}
            placement="right"
            onClose={close}
            closable={false}
            open={visible && !!data}
        >
            {data ? (
                <>
                    <div className="text-center mt-3">
                        <Avatar size={80} style={{ backgroundColor: '#87d068' }}>
                            {name[0]} {/* Display first letter of name as avatar */}
                        </Avatar>
                        <h3 className="mt-2 mb-0">{name}</h3>
                        <span className="text-muted">{username}</span>
                    </div>

                    <Divider dashed />

                    <div>
                        <h6 className="text-muted text-uppercase mb-3">Account details</h6>
                        <p>
                            <UserOutlined />
                            <span className="ml-3 text-dark">ID: {data.id}</span>
                        </p>
                        <p>
                            <CalendarOutlined />
                            <span className="ml-3 text-dark">Username: {username}</span>
                        </p>
                        <p>
                            <MailOutlined />
                            <span className="ml-3 text-dark">Email: {email}</span>
                        </p>
                    </div>

                    <Divider dashed />

                    <div className="mt-5">
                        <h6 className="text-muted text-uppercase mb-3">Contact</h6>
                        <p>
                            <MobileOutlined />
                            <span className="ml-3 text-dark">{phone}</span>
                        </p>
                        <p>
                            <GlobalOutlined />
                            <span className="ml-3 text-dark">
                                <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
                                    {website}
                                </a>
                            </span>
                        </p>
                    </div>

                    <Divider dashed />
                    
                    <div className="mt-5">
                        <h6 className="text-muted text-uppercase mb-3">Address</h6>
                        <p>{street}, {suite}</p>
                        <p>{city}, {zipcode}</p>
                    </div>

                    <Divider dashed />

                    {/* Displaying company details */}
                    <div className="mt-5">
                        <h6 className="text-muted text-uppercase mb-3">Company</h6>
                        <p>Name: {companyName}</p>
                        <p>Catchphrase: {catchPhrase}</p>
                        <p>BS: {bs}</p>
                    </div>
                </>
            ) : null}
        </Drawer>
    );
};

export default CustomerView;
