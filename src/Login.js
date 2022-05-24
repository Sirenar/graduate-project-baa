import './Login.less';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Input, Form } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import LogoIcon from './img/logo.png';
import LoginIllustration from './img/login-img.png';
import { login } from './api/userAction';

const { Header } = Layout;

function Login() {

    const [form] = Form.useForm();

    const [isLoading, setIsLoading] = useState(false);

    const onLogin = values => {
        setIsLoading(true);
        console.log('Received values of form: ', values);
        login(values).then(res => {
            console.log('Login result: ', res);
        })
        
    }

    useEffect(()=> {
        const localStorage = window.localStorage;
        if (localStorage.islogin === '1') {
            this.props.history.replace("/home")
          }
    }, []) 

    return (

        <div className='login'>
            <div className='left'>
                <Layout>
                    <Header className="header">
                    <div className="logo" >
                        <img src={LogoIcon}></img>
                        Medical Dashboard
                    </div>
                    </Header>
                </Layout>
                <div className='illustration-wrap'>
                    <img src={LoginIllustration}></img>
                    <h1>矮小症辅助诊断系统</h1>
                    <span>System for short stature diagnosis</span>
                </div>
            </div>
            <div className='right'>
                <div className='top-button-box'>
                    <Button ghost className='ghost-btn'>Sign up</Button>
                    <Button ghost className='ghost-btn'>Tour</Button>
                </div>
                <div className='login-panel'>
                    <h1>Welcome !</h1>
                    <h3>Sign in to your account</h3>
                    <div className='input-wrapper'>
                    <Form form={form} name="nest-messages" layout="vertical" onFinish={onLogin}>
                        <Form.Item
                            name="username"
                            label="Username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input className='input-box'
                                placeholder="Enter your username"
                                prefix={<UserOutlined style={{ color: '#d0d4f2' }} />}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password className='input-box'
                                placeholder="Input password"
                                prefix={<LockOutlined style={{ color: '#d0d4f2' }} />}
                                iconRender={visible => (visible ? <EyeTwoTone style={{ color: '#d0d4f2' }} /> : <EyeInvisibleOutlined style={{ color: '#d0d4f2' }} />)}
                            />
                        </Form.Item>
                         <Form.Item>
                            <Button className='login-btn' type="primary" shape="round" size='large' htmlType="submit" loading={isLoading}>Login</Button>
                        </Form.Item>
                    </Form>
                    </div>
                    {/* <Link
                        to={{
                            pathname: '/home',
                        }}
                    >
                    <Button className='login-btn' type="primary" shape="round" size='large' onClick={onLogin}>Login</Button>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Login;