import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Routes, Link, HashRouter} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import Dialog from './lib/dialog/dialog.example';
import Layout from './lib/layout/layout.example';

ReactDOM.render(
        <HashRouter>
            <div>
                <header>FUI</header>
                <div>
                    <aside>
                        组件：
                        <ul>
                            <li><Link to='/icon'>icon组件</Link></li>
                            <li><Link to='/dialog'>dialog组件</Link></li>
                            <li><Link to='/layout'>layout组件</Link></li>
                        </ul>
                    </aside>
                    <main>

                        <Routes>
                            <Route path='/icon' element={<IconExample/>}/>
                            <Route path='/dialog' element={<Dialog/>}/>
                            <Route path='/layout' element={<Layout/>}/>
                        </Routes>

                    </main>
                </div>
            </div>
        </HashRouter>
    , document.getElementById('root'));