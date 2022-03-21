import * as React from 'react';
import Button from './button';


const ButtonExample: React.FunctionComponent = () => {
    return (
        <div>
            <Button icon={{name:'copy'}}/>
            <Button icon={{name:'add'}} level='important'/>
            <Button icon={{name:'close'}} level='danger' style={{padding:0}}/>
        </div>
    );
};


export default ButtonExample;