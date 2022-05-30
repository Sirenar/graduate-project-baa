import './Login.less';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Input, Form, Tooltip, Checkbox, Radio } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import LogoIcon from './img/logo.png';
import LoginIllustration from './img/login-img.png';
import { login } from './api/userAction';

const { Header } = Layout;

function Login(props) {

    const [form] = Form.useForm();

    const [registerForm] = Form.useForm();

    const [isLoading, setIsLoading] = useState(false);

    const [isRegisting, setIsRegisting] = useState(false);

    const [expand, changeExpand] = useState(false);

    const onLogin = values => {
        setIsLoading(true);
        login(values).then(res => {
            console.log('Login result: ', res);
            props.history.push('/home');
            
        })
    }

    const onSignUp = () => {
        changeExpand(!expand);
    }

    const registeAccount = values => {
        console.log('values', values);
        setIsRegisting(true);
        setTimeout(() => {
            setIsRegisting(false);
            onSignUp();
        }, 1000)
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
            <div className={`right ${expand? 'right-expand':''}`}>
                <div className='top-button-box'>
                    <Button onClick={onSignUp} ghost className='ghost-btn'>{expand? 'Log in': 'Sign up'}</Button>
                    <Link to='/home'>
                        <Tooltip placement="bottom" color={'#a5ccff'} title='预览页面'>
                            <Button ghost className='ghost-btn'>Tour</Button>
                        </Tooltip>
                    </Link>
                </div>
                <div className='login-panel'>
                    <div className={`${expand? 'expand-title':''}`}>

                    <h1>{expand? 'Create Account' : 'Welcome !'}</h1>
                    <h3>{expand? 'Start new adventure from today.' : 'Sign in to your account'}</h3>
                    </div>
                    <div className='input-wrapper'>
                        {
                            expand? (
                                <Form form={registerForm} 
                                    name="nest-messages" 
                                    layout="vertical" 
                                    onFinish={registeAccount}
                                    initialValues={{ role: 'doctor' }}
                                >
                                    <div className='upper-input'>
                                        <Form.Item
                                            name="username"
                                            label="Name"    
                                            rules={[{ required: true, message: 'Your Name is required' }]}
                                        >
                                            <Input className='input-up'
                                                placeholder="Enter your name"
                                                prefix={<></>}
                                            />  
                                        </Form.Item>
                                        <Form.Item
                                            name="role"
                                            label="Role"    
                                            rules={[{ required: true, message: 'Role is required' }]}
                                        >
                                            <Radio.Group className='radio-box' defaultValue="doctor">
                                                <Radio.Button className='radio-box' value="doctor">Doctor</Radio.Button>
                                                <Radio.Button className='radio-box' value="trainer">Trainer</Radio.Button>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <Form.Item
                                            name="email"
                                            label="Email"
                                        >
                                            <Input className='input-box'
                                                placeholder="xxx@gmail.com"
                                                prefix={<></>}
                                            />  
                                        </Form.Item>
                                    <Form.Item
                                        name="password"
                                        label="Password"
                                        rules={[{ required: true, message: 'Please input your Password!' }]}
                                    >
                                        <Input.Password className='input-box'
                                            placeholder="6+characters"
                                            prefix={<></>}
                                            iconRender={visible => (visible ? <EyeTwoTone style={{ color: '#d0d4f2' }} /> : <EyeInvisibleOutlined style={{ color: '#d0d4f2' }} />)}
                                        />
                                    </Form.Item>
                                    <Form.Item name="remember" valuePropName="checked">
                                        <Checkbox className='check-btn'></Checkbox>
                                        <span className='check-btn'>
                                            I've read and accepted
                                            <span>{' '}Terms of Service{' '}</span>
                                           and
                                           <span>{' '}Privacy Policy</span>
                                        </span>
                                    </Form.Item>
                                    <Form.Item>
                                        <div className='upper-input'>
                                            <Button className='register-btn' type="primary" shape="round" size='large' htmlType="submit" loading={isRegisting}>Sign Up</Button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            ) : 
                            ( 
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
                                    prefix={expand? null : <LockOutlined style={{ color: '#d0d4f2' }}/>}
                                    iconRender={visible => (visible ? <EyeTwoTone style={{ color: '#d0d4f2' }} /> : <EyeInvisibleOutlined style={{ color: '#d0d4f2' }} />)}
                                />
                            </Form.Item>
                             <Form.Item>
                                <Button className='login-btn' type="primary" shape="round" size='large' htmlType="submit" loading={isLoading}>Login</Button>
                            </Form.Item>
                        </Form>)
                        }
                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;