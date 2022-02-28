import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Routes, Link, HashRouter} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import Dialog from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import './example.scss';
import Layout, {Header, Aside, Content, Footer} from './lib/layout/layout';

ReactDOM.render(
    <HashRouter>
        <Layout className="site-page">
            <Header className="site-header">
                <img src='./logo.png' width="48" height="48" alt=""/>
                <span> FUI </span>
            </Header>
            <Layout>
                <Aside className="site-aside">
                    组件：
                    <ul>
                        <li><Link to='/icon'>icon组件</Link></li>
                        <li><Link to='/dialog'>dialog组件</Link></li>
                        <li><Link to='/layout'>layout组件</Link></li>
                    </ul>
                </Aside>
                <Content className="site-main">
                    <Routes>
                        <Route path='/icon' element={<IconExample/>}/>
                        <Route path='/dialog' element={<Dialog/>}/>
                        <Route path='/layout' element={<LayoutExample/>}/>
                    </Routes>
                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; 樊蕾蕾
            </Footer>
        </Layout>
    </HashRouter>
    , document.getElementById('root'));