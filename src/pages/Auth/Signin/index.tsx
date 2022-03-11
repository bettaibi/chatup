import React from 'react'
import { Form, Input, Button, Checkbox, Divider, Row, Col } from 'antd';
import { GoogleOutlined, createFromIconfontCN  } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const initialValues = {
  email: '',
  password: '',
};

const Signin = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className="d__flex flex__column align__item__center justify__content__center bg__gredient">
      {/* <div>Logo</div> */}

      <div className="glass__blur">
        <Form
          name="login"
          layout="vertical"
          initialValues={initialValues}
          onFinish={onFinish}
          autoComplete="off"
          style={{ width: '100%' }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!'}, { type: 'email', message: 'Invalid email!'}]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: '0.5rem' }}
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }, { min: 6, message: 'Too short!' }]}
          >
            <Input.Password />
          </Form.Item>

          <div className='d__flex justify__content__between' style={{ marginBottom: '1rem' }}>
            <Checkbox>Remember me</Checkbox>
            <a href="#" className="link">Forgot password?</a>
          </div>


          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }} shape="round" size="large">
              Sing in
            </Button>
          </Form.Item>

          <Divider orientation="center" plain>
            Or continue with
          </Divider>

          <Row gutter={16}>
            <Col span={12}>
              <Button shape="round" icon={<GoogleOutlined twoToneColor="#ccc" />} style={{ width: '100%' }} />
            </Col>
            <Col span={12}>
              <Button shape="round" icon={ <IconFont type="icon-facebook" />} style={{ width: '100%'}} />
            </Col>
          </Row>
        </Form>

      </div>
    </div>
  )
}

export default Signin;