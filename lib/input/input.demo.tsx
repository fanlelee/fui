import React from 'react';
import Demo from '../../demo';
import InputExample1 from './input.example1';
import InputExample2 from './input.example2';
import InputExample3 from './input.example3';

const InputDemo: React.FunctionComponent = () => {
    return (<>
        <Demo code={require(`!!raw-loader!./input.example1`).default}>
            <h3 style={{marginBottom: 12}}>1、常用的input：</h3>
            <InputExample1/>
        </Demo>
        <Demo code={require(`!!raw-loader!./input.example2`).default}>
            <h3 style={{marginBottom: 12}}>2、input的值受控：</h3>
            <InputExample2/>
        </Demo>
        <Demo code={require(`!!raw-loader!./input.example3`).default}>
            <h3 style={{marginBottom: 12}}>3、带图标的input：</h3>
            <InputExample3/>
        </Demo>

    </>);
};

export default InputDemo;