import * as React from 'react';
import Button from './button';


const ButtonExample: React.FunctionComponent = () => {
    return (
        <>
            <Button level='normal'>Normal Button</Button>
            <Button level='important'>Important Button</Button>
            <Button level='danger'>Danger Button</Button>
        </>
    );
};


export default ButtonExample;