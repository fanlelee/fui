import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './lib/icon/icon';
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import IconExample from './lib/icon.example';
import Xxx from './lib/xxx.example';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Icon name='loading'/>
            <header>FUI</header>
            <div>
                <aside>
                    组件：
                    <ul>
                        <li><Link to='/icon'>icon组件</Link></li>
                        <li><Link to='/xxx'>xxx组件</Link></li>
                    </ul>
                </aside>
                <main>

                    <Routes>
                        <Route path='/icon' element={<IconExample/>}/>
                        <Route path='/xxx' element={<Xxx/>}/>
                    </Routes>

                </main>
            </div>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));