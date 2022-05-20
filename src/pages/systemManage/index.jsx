import './index.less';
import React, { useState } from 'react';
import { Avatar, Divider, Tooltip, Menu, Dropdown, Input, Form, Button, Space  } from 'antd';

import userAvatar from '../../img/avatar.png';
import hospitalAvatar from '../../img/healthcare-logo.png';

const SystemManage = () => {

    const menu = (
        <Menu
          items={[
            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                  A 模型
                </a>
              ),
            },
            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                  B 模型
                </a>
              ),
            },
            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                  C 模型
                </a>
              ),
            },
          ]}
        />
      );

return (    
     <div className='box system-manage'>
        <div className='top'>
            <h1 className='important'>Account</h1>
        </div>      
        <div className='avatar-line'>
            <Space>
                <div className='avatar'>
                    <div className='label'>Avatar</div>
                    <Avatar size={64} src={userAvatar}></Avatar>
                </div>
                <Button style={{color: '#1890ff', fontWeight: 'bold'}}>Upload</Button>
                <Button style={{color: '#7e8493', fontWeight: 'bold'}}>Remove</Button>
            </Space>
        </div>
        <Divider />
        <div className='info-box'>
            <div className='info-input'>
                <div className='label'>Your name</div>
                <Input className='input-box' defaultValue="杨梦宁" />
            </div>
            <div className='info-input'>
                <div className='label'>Your password</div>
                <Input className='input-box' defaultValue="********" />
            </div>
        </div>
        <Divider />
        <div className='info-box'>
            <div className='info-input'>
                <div className='label'>Email address</div>
                <Input className='input-box' placeholder="1234567890@cqu.edu.cn" />
            </div>
            <div className='info-input'>
                <div className='label'>Phone number</div>
                <Input className='input-box' defaultValue="13312345678" />
            </div>
        </div>
        <Divider />
        <div className='link-box'>
            <div className='label'>Linked Account</div>
            <div className='des'>We use this to let you sign in and populate your profile information</div>
            <div className='hospital'>
                <img src={hospitalAvatar}></img>
                <span style={{color: '#666'}}>Sign in with HIS</span>
                <Button className='connect-btn' style={{color: '#0b6cff', fontWeight: 'bold'}}>Connect</Button>
            </div>
        </div>
        <Divider />
        <div className='signout-box'>
            <div className='link-box'>
                <div className='label'>Sign out</div>
                <div className='des'>End the login session and access to the website</div>
            </div>
            <Button className='logout-btn' type="link">Sign out account</Button>
            {/* <div className='logout-box'>
                <Button className='logout-btn' type="link">Sign out account</Button>
            </div> */}
        </div>
        <Divider />
        <div className='top'>
            <h1 className='important'>Preference</h1>
        </div> 
        <div className='info-box'>
            <div className='info-input'>
                <div className='label'>Model</div>
                <Input className='input-box' placeholder="X Model" />
                {/* <Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
                    <Button className='input-box'>Model</Button>
                </Dropdown> */}
            </div>
            <div className='info-input'>
                <div className='label'>Algorithm</div>
                <Input className='input-box' placeholder="A Algo" />
            </div>
        </div>
        <Divider />
        <div className='submit-box'>
            <Button type="primary" className='save-btn'>Save changes</Button>
        </div>
        
    </div>);
}

export default SystemManage;