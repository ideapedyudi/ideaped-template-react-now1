import React from 'react';

// --------------- component ------------------
import SiderDemo from '../organisms/Sidebar';
import InvoiceBook from '../organisms/InvoiceBook';

// --------------- style ------------------
import { Layout } from 'antd';

const PageInvoice = () => {
    const kId = 3;
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <SiderDemo sKey={kId} />
                <Layout className="site-layout" style={{ marginLeft: '90px' }}>
                    <InvoiceBook />
                </Layout>
            </Layout>
        </>
    )
}

export default PageInvoice
