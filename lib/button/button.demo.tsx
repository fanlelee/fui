import React from 'react';
import Demo from '../../demo'
import ButtonExample1 from './button.example1';
import ButtonExample2 from './button.example2';
import ButtonExample3 from './button.example3';

const ButtonDemo: React.FunctionComponent = () => {
    return (<>
        <Demo code={require(`!!raw-loader!./button.example1`).default}>
            <h3 style={{marginBottom:12}}>1、常用的button：</h3>
            <ButtonExample1/>
        </Demo>
        <Demo code={require(`!!raw-loader!./button.example2`).default}>
            <h3 style={{marginBottom:12}}>2、带icon的button：</h3>
            <ButtonExample2/>
        </Demo>
        <Demo code={require(`!!raw-loader!./button.example3`).default}>
            <h3 style={{marginBottom:12}}>3、独立icon的button：</h3>
            <ButtonExample3/>
        </Demo>

    </>);
};

export default ButtonDemo;