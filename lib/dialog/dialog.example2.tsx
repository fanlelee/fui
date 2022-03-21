import React from 'react';
import  {alert, confirm} from './dialog';
import Button from '../button/button';

const DialogExample: React.FunctionComponent = () => {

    return <>
        <div>
            <Button onClick={() => {alert('This is a message.');}}>alert</Button>
        </div>
        <div style={{marginTop:8}}>
            <Button onClick={() => {confirm('Are you sure to do this？');}}>confirm</Button>
        </div>

    </>;
};

export default DialogExample;