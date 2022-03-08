import React, {useState} from 'react';
import Form, {FormData} from './form';
import Validator from './validator';
import Button from '../button/button';

const checkID = (id: string, succeed: (reason?: any) => void, fail: (reason?: any) => void) => {
    setTimeout(() => {
        if (id === '111') {
            succeed('身份证对了');
        } else {
            fail('身份证错了');
        }
    }, 3000);
};


const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormData>({
        username: 'abc',
        password: '123456',
        id: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {'type': 'text'}},
        {name: 'password', label: '密码', input: {'type': 'password'}},
        {name: 'id', label: '身份证', input: {'type': 'text'}}
    ]);

    const onSubmit = () => {
        Validator(formData, rules, (errors: any) => {setErrors(errors);});
    };
    const rules = [
        {key: 'username', required: true},
        {key: 'password', required: true, minLength: 6, maxLength: 12, pattern: /^[a-zA-Z0-9_]{8}$/},
        {
            key: 'id',
            required: true,
            validate: (id: string) =>
                new Promise<void>((resolve, reject) => {
                    checkID(id, resolve, reject);
                })
        },
    ];

    const [errors, setErrors] = useState({});
    return (<>
        <Form
            value={formData}
            fields={fields}
            buttons={
                <>
                    <Button type='button'>取消</Button>
                    <Button type='submit' level='important'>确定</Button>
                </>
            }
            onChange={newData => setFormData(newData)}
            onSubmit={onSubmit}
            errors={errors}
            errorsDisplayMode='all'
        />
    </>);
};

export default FormExample;