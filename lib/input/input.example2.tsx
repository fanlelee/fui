import * as React from 'react';
import Input from './input';
import {useState} from 'react';


const InputExample: React.FunctionComponent = () => {
    const [username, setUsername] = useState('Mr Wang');
    const onChange = (value: string) => {
        console.log(value);
        setUsername(value);
    };
    return <>
        <Input
            placeholder='user name'
            value={username}
            onInputChange={onChange}
        />
    </>;

};


export default InputExample;