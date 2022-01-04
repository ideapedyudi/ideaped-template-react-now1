import React from 'react';

// --------------- component ------------------
import SiderDemo from '../organisms/Sidebar';
import Awbbook from '../organisms/Awbbook';

// --------------- style ------------------
import { Layout } from 'antd';

const PageAwbbook = () => {
    const kId = 1;
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <SiderDemo sKey={kId} />
                <Layout className="site-layout" style={{ marginLeft: '90px' }}>
                    <Awbbook />
                </Layout>
            </Layout>
        </>
    )
}

export default PageAwbbook
