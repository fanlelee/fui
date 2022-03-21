import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Routes, NavLink, HashRouter} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import DialogDemo from './lib/dialog/dialog.demo';
import LayoutDemo from './lib/layout/layout.demo';
import './example.scss';
import Layout, {Header, Aside, Content, Footer} from './lib/layout/layout';
import FormDemo from './lib/form/form.demo';
import ValidatorDemo from './lib/form/validator.demo';
import ScrollDemo from './lib/scroll/scroll.demo';
import TreeDemo from './lib/tree/tree.demo';
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
                        <li><NavLink to='/button'>Button 按钮</NavLink></li>
                        <li><NavLink to='/input'>Input 输入框</NavLink></li>
                        <li><NavLink to='/icon'>Icon 图标</NavLink></li>
                        <li><NavLink to='/dialog'>Dialog 弹窗</NavLink></li>
                        <li><NavLink to='/layout'>Layout 布局</NavLink></li>
                        <li><NavLink to='/form'>Form 表单</NavLink></li>
                        <li><NavLink to='/validator'>Validator 校验器</NavLink></li>
                        <li><NavLink to='/scroll'>Scroll 滚动窗</NavLink></li>
                        <li><NavLink to='/tree'>Tree 树选择器</NavLink></li>
                        <li><NavLink to='/citySelect'>CitySelect 城市选择(web端)</NavLink></li>
                    </ul>
                </Aside>
                <Content className="site-main">
                    <Routes>
                        <Route path='*'  element={<Home/>}/>
                        <Route path='/button' element={<ButtonDemo/>}/>
                        <Route path='/input' element={<InputDemo/>}/>
                        <Route path='/icon' element={<IconDemo/>}/>
                        <Route path='/dialog' element={<DialogDemo/>}/>
                        <Route path='/layout' element={<LayoutDemo/>}/>
                        <Route path='/form' element={<FormDemo/>}/>
                        <Route path='/validator' element={<ValidatorDemo/>}/>
                        <Route path='/scroll' element={<ScrollDemo/>}/>
                        <Route path='/tree' element={<TreeDemo/>}/>
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

