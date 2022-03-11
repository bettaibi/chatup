import React from 'react';
import { Form, Input, Button, Checkbox, Divider, Row, Col, Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

const { Step } = Steps;

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
            {/* <div>Logo</div> */}

            <div className="glass__blur">
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
                                    rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Invalid email!' }]}
                                >
                                    <Input type="email" />
                                </Form.Item>
                                <Form.Item
                                    label="Phone"
                                    name="phone"
                                    rules={[{ required: true, message: 'Please input your phone!' }]}
                                >
                                    <Input type="email" />
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
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    rules={[{ required: true, message: 'Please input your password!' }, { min: 6, message: 'Too short!' }]}
                                >
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
    )
}

export default Signup;