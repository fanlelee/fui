import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './layout.example.scss';


const LayoutExample: React.FunctionComponent = () => {
    return (
            <Layout className='l' style={{height: 200}}>
                <Header className='h'>header</Header>
                <Content className='c'>content</Content>
                <Footer className='f'>footer</Footer>
            </Layout>
    );
};

export default LayoutExample;