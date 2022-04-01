import './App.less';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import DoctorPanel from './subModule/doctorPanel'
import LogoIcon from './img/logo.png';
import userAvatar from './img/avatar.png';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function App() {
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
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
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
          <DoctorPanel></DoctorPanel>
        </Content>
      </Layout>
    </Layout>
  </Layout>,
    </div>
  );
}

export default App;
