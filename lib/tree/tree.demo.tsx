import React from 'react';
import Demo from '../../demo';
import TreeExample1 from './tree.example1';
import TreeExample2 from './tree.example2';

const ScrollDemo: React.FunctionComponent = () => {
    return <>
        <Demo code={require(`!!raw-loader!./Tree.example1`).default}>
            <h3 style={{marginBottom: 12}}>1、单选：</h3>
            <TreeExample1/>
        </Demo>
        <Demo code={require(`!!raw-loader!./Tree.example2`).default}>
            <h3 style={{marginBottom: 12}}>2、多选：</h3>
            <TreeExample2/>
        </Demo>
        <p>Tree组件有父子孙（半选）的联动效果。</p>
    </>
};

export default ScrollDemo;