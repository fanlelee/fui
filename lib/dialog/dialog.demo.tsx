import React from 'react';
import Demo from '../../demo'
import DialogExample1 from './dialog.example1';
import DialogExample2 from './dialog.example2';
import DialogExample3 from './dialog.example3';

const DialogDemo: React.FunctionComponent = () => {
    return (<>
        <Demo code={require(`!!raw-loader!./dialog.example1`).default}>
            <h3 style={{marginBottom:12}}>1、toggle dialog：</h3>
            <DialogExample1/>
        </Demo>
        <Demo code={require(`!!raw-loader!./dialog.example2`).default}>
            <h3 style={{marginBottom:12}}>2、alert/confirm dialog：</h3>
            <DialogExample2/>
        </Demo>
        <Demo code={require(`!!raw-loader!./dialog.example3`).default}>
            <h3 style={{marginBottom:12}}>3、自定义 modal dialog：</h3>
            <DialogExample3/>
        </Demo>
    </>);
};

export default DialogDemo;