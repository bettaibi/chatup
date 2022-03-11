import React from 'react';
import { Form, Input, Button, Row, Col, Steps, Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

const { Step } = Steps;
const { Title, Text } = Typography;

const initialValues = {
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
}

const Signup = () => {
    const [currentStep, setCurrentStep] = React.useState<number>(0);

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    function nextStep() {
        setCurrentStep(prev => prev + 1);
    }

    function previousStep() {
        setCurrentStep(prev => prev - 1);
    }

    return (
        <div className="d__flex flex__column align__item__center justify__content__center bg__gredient">
            <div className="container__sm">
                <div className="glass__blur p__16 c__radius">
                    <div className="mb__16">
                        <img src="/chatup/img/58.png" alt="chatup_logo" />
                    </div>
                    <div className="mb__16">
                        <Title level={3} className="m__0">Sign up</Title>
                        <Text>
                          Already have an account? <Link to="/" className="link">Sign in</Link>
                        </Text>
                    </div>
                    <Form
                        name="singup"
                        layout="vertical"
                        initialValues={initialValues}
                        onFinish={onFinish}
                        autoComplete="off"
                        style={{ width: '100%' }}
                    >

                        <Steps size="small" current={currentStep} direction="horizontal">
                            <Step title="User details" />
                            <Step title="Password" />
                            <Step title="Done" icon={<SmileOutlined />} />
                        </Steps>
                        <br />
                        {
                            currentStep === 0 && (
                                <>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input type="text" />
                                    </Form.Item>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{ required: true, message: 'Please input your E-mail!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
                                    >
                                        <Input type="email" />
                                    </Form.Item>
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

                                    <Row>
                                        <Col>
                                            <Button shape="round" onClick={nextStep}>Next Step</Button>
                                        </Col>
                                    </Row>
                                </>
                            )
                        }
                        {
                            currentStep === 1 && (
                                <>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }, { min: 6, message: 'Too short!' }]}
                                        hasFeedback
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        rules={[{ required: true, message: 'Please input your password!' }, { min: 6, message: 'Too short!' },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                            },
                                        }),]}
                                        dependencies={['password']}
                                        hasFeedback>
                                        <Input.Password />
                                    </Form.Item>

                                    <Row justify='space-between'>
                                        <Col>
                                            <Button shape="round" onClick={previousStep}>Previous Step</Button>
                                        </Col>
                                        <Col>
                                            <Button shape="round" onClick={nextStep}>Next Step</Button>
                                        </Col>
                                    </Row>
                                </>
                            )
                        }
                        {
                            currentStep === 2 && (
                                <div>
                                    <h5>Term & Condition </h5>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad corporis animi hic ipsam
                                        accusantium, sunt neque dolorem repellendus ratione
                                        porro quo aut? Ducimus tempore incidunt quod ipsam consequatur doloremque eligendi.
                                    </p>
                                    <Row justify='space-between'>
                                        <Col>
                                            <Button shape="round" onClick={previousStep}>Previous Step</Button>
                                        </Col>
                                        <Col>
                                            <Button type="primary" htmlType="submit" shape="round">
                                                Sing up
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }

                    </Form>
                </div>
            </div>

        </div>
    )
}

export default Signup;