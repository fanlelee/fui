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
                <Header className='h'>header</Header>
                <Layout>
                    <Aside className='a'>aside</Aside>
                    <Content className='c'>content</Content>
                </Layout>
                <Footer className='f'>footer</Footer>
            </Layout>
    );
};

export default LayoutExample;