import React, { useContext, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import { Button, Flex, Layout, Menu, Typography  } from 'antd';
import logo from '../../assets/img/ajendam_im-logo.png'
import AppContextProvider, { AppContext } from '../../context/context';
import Routes from '../../routes/route';

const {Title} = Typography;
const { Header, Sider, Content } = Layout;

const App = () => {

  // State
  const [collapsed, setCollapsed] = useState(true);
  // Context
  const {route} = useContext(AppContext)
  console.log(route)

  return (
    <AppContextProvider>
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
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <AppstoreOutlined />,
                label: 'Dashboard',
              },
              {
                key: '2',
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
            }}
          >
            <Flex align='center'>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  color:'white',
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
              <Title level={3} style={{color:'#E8E8E8',margin:0,lineHeight:1}}>Dashboard</Title>
            </Flex>
          </Header>
          <Content
            style={{
              marginTop:15,
              background: '#1D1E21',
              color:'white',
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              borderRadius: 5,
            }}
          >
            <Routes/>
          </Content>
        </Layout>
      </Layout>
    </AppContextProvider>
  );
};
export default App;