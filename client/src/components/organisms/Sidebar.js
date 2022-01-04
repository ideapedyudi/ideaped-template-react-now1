import '../styles/dashboard.css';
import React from 'react';

// ---------------- component -------------
import Logout from '../atoms/Logout';

// --------------- style ------------------
import { Layout, Menu } from 'antd';
import MenuBar from './Menu';
const { Sider } = Layout;

class SiderDemo extends React.Component {
    state = {
        collapsed: true,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}>
                <Menu theme="dark" defaultSelectedKeys={[`${this.props.sKey}`]} mode="inline">
                    <MenuBar sKey={[`${this.props.sKey}`]} />
                    <Logout />
                </Menu>
            </Sider>
        );
    }
}
export default SiderDemo;
