import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Routes, Link, HashRouter} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import Dialog from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import './example.scss';
import Layout, {Header, Aside, Content} from './lib/layout/layout';

ReactDOM.render(
    <HashRouter>
        <Layout>
            <Header>
                FUI
            </Header>
            <Layout>
                <Aside>
                    组件：
                    <ul>
                        <li><Link to='/icon'>icon组件</Link></li>
                        <li><Link to='/dialog'>dialog组件</Link></li>
                        <li><Link to='/layout'>layout组件</Link></li>
                    </ul>
                </Aside>
                <Content>
                    <Routes>
                        <Route path='/icon' element={<IconExample/>}/>
                        <Route path='/dialog' element={<Dialog/>}/>
                        <Route path='/layout' element={<LayoutExample/>}/>
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    </HashRouter>
    , document.getElementById('root'));