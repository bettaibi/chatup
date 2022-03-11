import { Form, Input, Button, Checkbox, Divider, Row, Col, Typography } from 'antd';
import { GoogleOutlined, createFromIconfontCN } from '@ant-design/icons';
import useToggle from '../../../hooks/useToggle';
import ForgotPasswordDialog from '../../../components/ForgotPasswordDialog';
import {Link} from 'react-router-dom';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const { Title, Text } = Typography;

const initialValues = {
  email: '',
  password: '',
};

const Signin = () => {
  const { show, handleOpen, handleClose} = useToggle();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className="d__flex flex__column align__item__center justify__content__center bg__gredient">

      <div className="container__sm">
        <div className="glass__blur c__radius p__16">
          <div className="mb__16">
            <img src="/chatup/img/58.png" alt="chatup_logo" />
          </div>
          <div className="mb__16">
            <Title level={3} className="m__0">Sign in</Title>
            <Text>
              Don't have an account? <Link to="/signup" className="link">Sign up</Link>
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
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your E-mail!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
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

            <div className='d__flex justify__content__between align__item__center' style={{ marginBottom: '1rem' }}>
              <Checkbox>Remember me</Checkbox>
              <span onClick={handleOpen} className="link">Forgot password?</span>
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
                <Button shape="round" icon={<GoogleOutlined twoToneColor="#ccc"/>} style={{ width: '100%' }} />
              </Col>
              <Col span={12}>
                <Button shape="round" icon={<IconFont type="icon-facebook"/>} style={{ width: '100%' }} />
              </Col>
            </Row>
          </Form>

        </div>
      </div>
      <ForgotPasswordDialog show={show} handleClose={handleClose} />
    </div>
  )
}

export default Signin;