import React from 'react';
import Demo from '../../demo';
import ScrollExample from './scroll.example';

const ScrollDemo: React.FunctionComponent = () => {
    return <>
        <Demo code={require(`!!raw-loader!./scroll.example`).default}>
            <h3 style={{marginBottom: 12}}>Scroll基本用法：</h3>
            <ScrollExample/>
        </Demo>
        <p>Scroll组件在web端有下拉更新效果。</p>
    </>
};

export default ScrollDemo;