import * as React from 'react';
import Input from './input';

const InputExample: React.FunctionComponent = () => {
    return <>
        <Input
            placeholder='user name'
            icon={{name: 'business-man', location: 'left'}}
        />
        <Input
            placeholder='telephone number'
            icon={{name: 'telephone', location: 'right'}}
        />
    </>;

};

export default InputExample;