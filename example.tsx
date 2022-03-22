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
import CitySelectDemo from './lib/citySelect/citySelect.demo';
import ButtonDemo from './lib/button/button.demo';
import InputDemo from './lib/input/input.demo';
import Highlight, {defaultProps} from 'prism-react-renderer';
import Button from './lib/button/button';

const HomeHighlight: React.FC<{ code: string }> = (props) => {
    return <Highlight {...defaultProps} code={props.code} language="jsx">
        {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                  <div {...getLineProps({line, key: i})}>
                      {line.map((token, key) => (
                          <span {...getTokenProps({token, key})} />
                      ))}
                  </div>
              ))}
            </pre>
        )}
    </Highlight>;
};

const Home: React.FC = () => {
    return <>
        <div>
            <h1>FUI</h1>
            <p>▪ 一套基于React而开发的UI框架；</p>
            <p>▪ 使用了TypeScript、SCSS相关技术；</p>
            <p>▪ 使用Jest做单元测试、测试覆盖率，并通过Circle CI持续集成。</p>
        </div>
    </>;
};
const Install: React.FC = () => {
    return <>
        <div>
            <h1>安装</h1>
            <p className='install'>$ npm install fui-fan --save-dev </p>
            <div>或者：<p className='install'>$ yarn add fui-fan --dev</p></div>
        </div>
    </>;
};
const Start: React.FC = () => {
    const code = `
    import * as React from 'react';
    import {Button} from 'fui-fan';
    
    const ButtonExample: React.FunctionComponent = () => {
        return <>
            <Button level='normal'>Normal Button</Button>
        </>
    };
    `;
    return <>
        <div>
            <h1>快速上手</h1>
            <p>示例：</p>
            <Button level='normal' style={{margin: '8px 0'}}>Normal Button</Button>
            <HomeHighlight code={code}/>
        </div>
    </>;
};
ReactDOM.render(
    <HashRouter>
        <Layout className="site-page">
            <Header className="site-header">
                <NavLink to='*'>
                    <img src={require('./logo.png').default} width="48" height="48" alt=""/>
                    <span> FUI </span>
                </NavLink>
                <a className='github' target='_blank' href="https://github.com/fanlelee/fui/tree/main/lib">GitHub</a>
            </Header>
            <Layout>
                <Aside className="site-aside">
                    <h2 style={{padding: 0}}><NavLink to='install' className='introduction'>安装</NavLink></h2>
                    <h2 style={{padding: 0}}><NavLink to='start' className='introduction'>起步</NavLink></h2>
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
                        <Route path='*' element={<Home/>}/>
                        <Route path='install' element={<Install/>}/>
                        <Route path='start' element={<Start/>}/>
                        <Route path='/button' element={<ButtonDemo/>}/>
                        <Route path='/input' element={<InputDemo/>}/>
                        <Route path='/icon' element={<IconDemo/>}/>
                        <Route path='/dialog' element={<DialogDemo/>}/>
                        <Route path='/layout' element={<LayoutDemo/>}/>
                        <Route path='/form' element={<FormDemo/>}/>
                        <Route path='/validator' element={<ValidatorDemo/>}/>
                        <Route path='/scroll' element={<ScrollDemo/>}/>
                        <Route path='/tree' element={<TreeDemo/>}/>
                        <Route path='/citySelect' element={<CitySelectDemo/>}/>
                    </Routes>
                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; 樊蕾蕾
            </Footer>
        </Layout>
    </HashRouter>
    , document.getElementById('root'));
