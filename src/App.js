import './App.less';
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, SettingOutlined } from '@ant-design/icons';

import DoctorPanel from './pages/doctorPanel';
import StatisticsPanel from './pages/statistics';
import Records from './pages/dataManage';
import ModelTraining from './pages/modelTraining';
import SystemManage from './pages/systemManage';
import LogoIcon from './img/logo.png';
import userAvatar from './img/avatar.png';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function App() {
  const [contentKey, changeContent] = useState('1');

  const onChangeMenu = ({key}) => {
    changeContent(key);
  }

  const toUserPage = () => {
    changeContent('6');
  }

  const ResponsiveContent = () => {
    switch(contentKey){
      case('1'):
      return (<DoctorPanel></DoctorPanel>);
      case('3'):
      return(<StatisticsPanel></StatisticsPanel>);
      case('4'):
      return(<Records></Records>);
      case('5'):
      return(<ModelTraining></ModelTraining>)
      case('6'):
      return(<SystemManage></SystemManage>)
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
        <div  onClick={toUserPage} className="avatar-box">
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
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub2']}
          style={{ height: '100%', borderRight: 0 }}
          onClick={onChangeMenu}
        >
          <Menu.Item key="1" icon={<UserOutlined />} >
            诊间接诊
          </Menu.Item>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="数据管理">
            <Menu.Item key="3">数据统计</Menu.Item>
            <Menu.Item key="4">病例数据</Menu.Item>
            <Menu.Item key="5">模型训练</Menu.Item>
          </SubMenu>
          <Menu.Item key="6" icon={<SettingOutlined />} >
            系统设置
          </Menu.Item>
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
