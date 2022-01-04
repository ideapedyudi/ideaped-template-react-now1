import React from 'react';
import { Helmet } from "react-helmet";

// --------------- component ------------------
import SiderDemo from '../organisms/Sidebar';

// --------------- style ------------------
import { Layout } from 'antd';
import imagenotfound from '../asset/notfound.svg'

const Notfound = () => {
    return (
        <>
            {/*============================== title ===========================*/}
            <Helmet>
                <meta charSet="utf-8" />
                <title>KHR System</title>
            </Helmet>
            <Layout style={{ minHeight: '100vh' }}>
                <SiderDemo />
                <Layout className="site-layout" style={{ marginLeft: '90px' }}>
                    <center>
                        <img src={imagenotfound} width="50%" alt="" />
                    </center>
                </Layout>
            </Layout>
        </>
    )
}

export default Notfound
