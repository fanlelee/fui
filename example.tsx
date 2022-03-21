import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Routes, NavLink, HashRouter} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import Dialog from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import './example.scss';
import Layout, {Header, Aside, Content, Footer} from './lib/layout/layout';
import FormExample from './lib/form/form.example';
import ScrollExample from './lib/scroll/scroll.example';
import TreeExample from './lib/tree/tree.example';
import CitySelectExample from './lib/citySelect/citySelect.example';
import ButtonDemo from './lib/button/button.demo';
import InputDemo from './lib/input/input.demo';

const Home:React.FC = ()=>{
    return <>
        <div>
            <h1>FUI</h1>
            <p>一套基于React而开发的UI框架。</p>
        </div>
    </>
}


ReactDOM.render(
    <HashRouter>
        <Layout className="site-page">
            <Header className="site-header">
                <img src={require('./logo.png').default} width="48" height="48" alt=""/>
                <span> FUI </span>
            </Header>
            <Layout>
                <Aside className="site-aside">
                    <h2>组件</h2>
                    <ul>
                        <li><NavLink to='/button'>button组件</NavLink></li>
                        <li><NavLink to='/input'>input组件</NavLink></li>
                        <li><NavLink to='/icon'>icon组件</NavLink></li>
                        <li><NavLink to='/dialog'>dialog组件</NavLink></li>
                        <li><NavLink to='/layout'>layout组件</NavLink></li>
                        <li><NavLink to='/form'>form组件</NavLink></li>
                        <li><NavLink to='/scroll'>scroll组件</NavLink></li>
                        <li><NavLink to='/tree'>tree组件</NavLink></li>
                        <li><NavLink to='/citySelect'>citySelect组件</NavLink></li>
                    </ul>
                </Aside>
                <Content className="site-main">
                    <Routes>
                        <Route path='*'  element={<Home/>}/>
                        <Route path='/button' element={<ButtonDemo/>}/>
                        <Route path='/input' element={<InputDemo/>}/>
                        <Route path='/icon' element={<IconDemo/>}/>
                        <Route path='/dialog' element={<Dialog/>}/>
                        <Route path='/layout' element={<LayoutExample/>}/>
                        <Route path='/form' element={<FormExample/>}/>
                        <Route path='/scroll' element={<ScrollExample/>}/>
                        <Route path='/tree' element={<TreeExample/>}/>
                        <Route path='/citySelect' element={<CitySelectExample/>}/>
                    </Routes>
                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; 樊蕾蕾
            </Footer>
        </Layout>
    </HashRouter>
    , document.getElementById('root'));

