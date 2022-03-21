import * as React from 'react';
import Input from './input';

const InputExample: React.FunctionComponent = () => {
    return (
        <>
            <Input placeholder='请输入'>用户名：</Input>
            <Input placeholder='请输入'>手机号：</Input>
        </>
    );
};


export default InputExample;