import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss'


const LayoutExample: React.FunctionComponent = () => {
    return (<>
        <div>
            例1：
            <Layout className='l' style={{height:200}}>
                <Header className='h'>header</Header>
                <Content className='c'>content</Content>
                <Footer className='f'>footer</Footer>
            </Layout>
        </div>
        <div>
            例2：
            <Layout className='l' style={{height:200}}>
                <Header className='h'>header</Header>
                <Layout>
                    <Aside className='a'>aside</Aside>
                    <Content className='c'>content</Content>
                </Layout>
                <Footer className='f'>footer</Footer>
            </Layout>
        </div>
        <div>
            例3：
            <Layout className='l' style={{height:200}}>
                <Header className='h'>header</Header>
                <Layout>
                    <Content className='c'>content</Content>
                    <Aside className='a'>aside</Aside>
                </Layout>
                <Footer className='f'>footer</Footer>
            </Layout>
        </div>
        <div>
            例4：
            <Layout className='l' style={{height:200}}>
                <Aside className='a'>aside</Aside>
                <Layout>
                    <Header className='h'>Header</Header>
                    <Content className='c'>Content</Content>
                    <Footer className='f'>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    </>);
};

export default LayoutExample;