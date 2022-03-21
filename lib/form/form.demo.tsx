import React from 'react';
import Demo from '../../demo';
import FormExample from './form.example';

const FormDemo: React.FunctionComponent = () => {
    return (
        <>
            <Demo code={require(`!!raw-loader!./form.example`).default}>
                <FormExample/>
            </Demo>
            <p>通常Form表单可以与Validator校验器一起使用。</p>
        </>
    );
};

export default FormDemo;