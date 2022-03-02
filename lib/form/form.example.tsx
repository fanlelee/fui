import React, {useState} from 'react';
import Form, {FormData} from './form';
import Validator from './validator';

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormData>({
        username: 'abc',
        password: '123456'
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {'type': 'text'}},
        {name: 'password', label: '密码', input: {'type': 'password'}}
    ]);

    const onSubmit = () => {
        setErrors(Validator(formData,rules))
    };
    const rules = [
        {key: 'username', required: true},
        {key: 'password', required: true, minLength: 6, maxLength: 12, pattern: /^[a-zA-Z0-9_]{8}$/}
    ];

    const [errors,setErrors] = useState({})
    return (<>
        <Form
            value={formData}
            fields={fields}
            buttons={
                <>
                    <button type='button'>取消</button>
                    <button type='submit'>确定</button>
                </>
            }
            onChange={newData => setFormData(newData)}
            onSubmit={onSubmit}
            errors ={errors}
        />
    </>);
};

export default FormExample;