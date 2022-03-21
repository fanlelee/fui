import React from 'react';
import Demo from '../../demo';
import LayoutExample1 from './layout.example1';
import LayoutExample2 from './layout.example2';
import LayoutExample3 from './layout.example3';
import LayoutExample4 from './layout.example4';

const LayoutDemo: React.FunctionComponent = () => {
    return (<>
        <h3>示例展示：</h3>
        <Demo code={require(`!!raw-loader!./layout.example1`).default}>
            <LayoutExample1/>
        </Demo>
        <Demo code={require(`!!raw-loader!./layout.example2`).default}>
            <LayoutExample2/>
        </Demo>
        <Demo code={require(`!!raw-loader!./layout.example3`).default}>
            <LayoutExample3/>
        </Demo>
        <Demo code={require(`!!raw-loader!./layout.example4`).default}>
            <LayoutExample4/>
        </Demo>
    </>);
};

export default LayoutDemo;