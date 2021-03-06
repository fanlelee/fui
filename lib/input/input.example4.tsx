import * as React from 'react';
import Input from './input';

const InputExample: React.FunctionComponent = () => {
    return <>
        <Input status='error'/>
        <Input status='warning'/>
        <Input status='ok'/>
    </>;

};

export default InputExample;