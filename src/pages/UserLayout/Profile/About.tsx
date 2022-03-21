import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';

const initialValues = {
    username: '',
    phone: '',
    bio: '',
    city: '',
    country: ''
};

const About = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    return (
        <div>
            <Form
                name="aboutForm"
                layout="vertical"
                initialValues={initialValues}
                onFinish={onFinish}
                autoComplete="off"
                style={{ width: '100%' }}
            >
                <div className="p__16">
                    <Row gutter={[16, 0]}>
                        <Col span={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input type="text" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[
                                    { required: true, message: 'Please input your phone!' },
                                    { min: 8, max: 8, message: 'Phone should has 8 digits' }
                                ]}
                            >
                                <Input min="0" type="number" addonBefore="+216" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[16, 0]}>
                        <Col span={12}>
                            <Form.Item
                                label="City"
                                name="city"
                                rules={[{ required: true, message: 'Please input your city!' }]}
                            >
                                <Input type="text" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Country"
                                name="country"
                                rules={[{ required: true, message: 'Please input your country!' }]}
                            >
                                <Input type="text" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        name="Bio"
                        label="bio"
                        rules={[{ required: true, message: 'Please input Bio' }]}
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                </div>


                <div className="p__16 bg__lighten__green" style={{textAlign: 'right' }}>

                    <Button type="primary" htmlType="submit" shape="round" size="large">
                       Save
                    </Button>

                </div>
            </Form>
        </div>
    )
}

export default About;