import React from 'react';

// --------------- component ------------------
import SiderDemo from '../organisms/Sidebar';
import ReportTransaksi from '../organisms/ReportTransaksi';

// --------------- style ------------------
import { Layout } from 'antd';

const PageReportTransaksi = () => {
    const kId = 2;
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <SiderDemo sKey={kId} />
                <Layout className="site-layout" style={{ marginLeft: '90px' }}>
                    <ReportTransaksi />
                </Layout>
            </Layout>
        </>
    )
}

export default PageReportTransaksi
