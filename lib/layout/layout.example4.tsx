import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss'


const LayoutExample: React.FunctionComponent = () => {
    return (
            <Layout className='l' style={{height:200}}>
                <Aside className='a'>aside</Aside>
                <Layout>
                    <Header className='h'>Header</Header>
                    <Content className='c'>Content</Content>
                    <Footer className='f'>Footer</Footer>
                </Layout>
            </Layout>
    );
};

export default LayoutExample;