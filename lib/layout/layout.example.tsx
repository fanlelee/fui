import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';


const LayoutExample: React.FunctionComponent = () => {
    return (<>
        <div>
            例1：
            <Layout style={{height:200}}>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
        </div>
        <div>
            例2：
            <Layout style={{height:200}}>
                <Header>header</Header>
                <Layout>
                    <Aside>aside</Aside>
                    <Content>content</Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </div>
        <div>
            例3：
            <Layout style={{height:200}}>
                <Header>header</Header>
                <Layout>
                    <Content>content</Content>
                    <Aside>aside</Aside>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </div>
        <div>
            例4：
            <Layout  style={{height:200}}>
                <Aside>aside</Aside>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    </>);
};

export default LayoutExample;