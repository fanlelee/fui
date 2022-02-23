import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './lib/icon/icon';
import {Route, Routes, Link, HashRouter} from 'react-router-dom';
import IconExample from './lib/icon.example';
import Xxx from './lib/xxx.example';
import Dialog from './lib/dialog/dialog.example';

ReactDOM.render(
        <HashRouter>
            <div>
                <Icon name='loading'/>
                <header>FUI</header>
                <div>
                    <aside>
                        组件：
                        <ul>
                            <li><Link to='/icon'>icon组件</Link></li>
                            <li><Link to='/xxx'>xxx组件</Link></li>
                            <li><Link to='/dialog'>dialog组件</Link></li>
                        </ul>
                    </aside>
                    <main>

                        <Routes>
                            <Route path='/icon' element={<IconExample/>}/>
                            <Route path='/xxx' element={<Xxx/>}/>
                            <Route path='/dialog' element={<Dialog/>}/>
                        </Routes>

                    </main>
                </div>
            </div>
        </HashRouter>
    , document.getElementById('root'));