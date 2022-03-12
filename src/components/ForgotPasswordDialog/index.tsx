import { Modal, Form, Button, Input, Row, Col, Typography } from 'antd';
import React from 'react';
import useToggle from '../../hooks/useToggle';

const { Title, Text } = Typography;

const initialValues = {
    email: ''
};


const ForgotPasswordDialog = () => {
    const { show, handleOpen, handleClose } = useToggle();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (
        <React.Fragment>
            <span onClick={handleOpen} className="link">Forgot password?</span>
            <Modal visible={show} footer={null} closable={false} centered mask={false}
                bodyStyle={{ padding: '1rem' }}
                wrapClassName="glass__blur" style={{ maxWidth: '300px' }}>
                <div className="mb__16">
                    <img src="/chatup/img/58.png" alt="chatup_logo" />
                </div>
                <div className="mb__16">
                    <Title level={3} className="m__0">Forgot password?</Title>
                    <Text>
                        Fill the form to reset your password
                    </Text>
                </div>
                <Form
                    name="login"
                    layout="vertical"
                    initialValues={initialValues}
                    onFinish={onFinish}
                    autoComplete="off"
                    style={{ width: '100%' }}
                >
                    <p>

                    </p>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your E-mail!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
                    >
                        <Input type="email" />
                    </Form.Item>

                    <Row justify="end" gutter={8}>
                        <Col>
                            <Button shape="round" onClick={handleClose}>
                                close
                            </Button>
                        </Col>
                        <Col>
                            <Button type="primary" htmlType="submit" shape="round">
                                Send reset link
                            </Button>
                        </Col>
                    </Row>

                </Form>
            </Modal>
        </React.Fragment>
    )
}

export default ForgotPasswordDialog;