import './App.less';
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import DoctorPanel from './pages/doctorPanel';
import StatisticsPanel from './pages/statistics';
import LogoIcon from './img/logo.png';
import userAvatar from './img/avatar.png';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function App() {
  const [contentKey, changeContent] = useState('1');

  const onChangeMenu = ({key}) => {
    changeContent(key);
  }

  const ResponsiveContent = () => {
    switch(contentKey){
      case('1'):
      return (<DoctorPanel></DoctorPanel>);
      case('3'):
      return(<StatisticsPanel></StatisticsPanel>);
    }
  }
  return (
    <div className="App">
  <Layout>
    <Header className="header">
      <div className="logo" >
          <img src={LogoIcon}></img>
          Medical Dashboard
      </div>
      <div className="user">
        <div className="avatar-box">
          <img src={userAvatar}></img>
        </div>
        <div className='user-info'>
          <span className="des">你好，<br/></span>
          <span className='important'>{'杨梦宁医生'}</span>
        </div>
      </div>
    </Header>
    <Layout>
      <Sider width={180} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['3']}
          defaultOpenKeys={['sub2']}
          style={{ height: '100%', borderRight: 0 }}
          onClick={onChangeMenu}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="医生界面">
            <Menu.Item key="1">诊间接诊</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="数据管理">
            <Menu.Item key="3">数据统计</Menu.Item>
            <Menu.Item key="4">病例数据</Menu.Item>
            <Menu.Item key="5">模型训练</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            margin: 0,
            minHeight: 580,
          }}
        >
          <ResponsiveContent></ResponsiveContent>
        </Content>
      </Layout>
    </Layout>
  </Layout>,
    </div>
  );
}

export default App;
