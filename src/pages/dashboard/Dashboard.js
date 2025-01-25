import React, { useContext, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import { Button, Flex, Layout, Menu, Typography  } from 'antd';
import logo from '../../assets/img/ajendam_im-logo.png'
import { AppContext } from '../../context/context';
import Routes from '../../routes/route';

const {Title} = Typography;
const { Header, Sider, Content } = Layout;

const App = () => {

  // State
  const [collapsed, setCollapsed] = useState(true);
  // Context
  const {route,handleRouteChange} = useContext(AppContext)

  // Function Click Menu to Change State Route
  const handleClickSideBar = (e) => {
    handleRouteChange(e.key);
  };

  return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} theme='dark' style={{background:'#1D1E21'}}>
          <div className="demo-logo-vertical" />
          <div style={{display:'flex',justifyContent:'center'}}>
            <img
                src={logo} // Path gambar (dari folder public)
                alt="Logo"
                style={{
                  height: '75px',
                  width: '75px',
                  padding:5,
                }}
              />
          </div>
          {/* Divider */}
          <div style={{padding:5}}>
            <div style={{background:'#333',paddingTop:1}}/>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            onClick={handleClickSideBar}
            defaultSelectedKeys={[route]}
            selectedKeys={[route]}
            items={[
              {
                key: 'dashboard',
                icon: <AppstoreOutlined />,
                label: 'Dashboard',
              },
              {
                key: 'anggota',
                icon: <UserOutlined />,
                label: 'Anggota',
              },
            ]}
          />
        </Sider>
        <Layout style={{background:'black'}}>
          <Header
            style={{
              margin:16,
              marginBottom:0,
              padding: 0,
              borderRadius:5,
              background: '#1D1E21',
            }}>
            <Flex align='center'>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
              <Title level={3} style={{margin:0,lineHeight:1}}>Dashboard</Title>
            </Flex>
          </Header>
          <Content className='layout-content'>
            <Routes/>
          </Content>
        </Layout>
      </Layout>
  );
};
export default App;