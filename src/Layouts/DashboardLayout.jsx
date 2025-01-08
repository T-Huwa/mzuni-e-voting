import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  LikeOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';

const { Sider, Content } = AntLayout;

const menuItems = [
  { key: '/', icon: <HomeOutlined />, text: 'Dashboard' },
  { key: '/candidates', icon: <UserOutlined />, text: 'Candidates' },
  { key: '/vote', icon: <LikeOutlined />, text: 'Vote' },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <AntLayout style={{ height: '100vh' }}>
      <Sider width={200} theme="dark" style={{ position: 'fixed', height: '100vh', left: 0 }}>
        <div style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.3)' }} />
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.key}>{item.text}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <Menu theme="dark" mode="inline" selectable={false} style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <Menu.Item key="logout" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      <AntLayout style={{ marginLeft: 200 }}>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            overflowY: 'auto',
            height: 'calc(100vh - 48px)',
          }}
        >
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
}
