import React, {useState} from 'react';
import Form, {FormData}  from './form';

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormData>({
        username: 'abc',
        password: '123456'
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {'type': 'text'}},
        {name: 'password', label: '密码', input: {'type': 'password'}}
    ]);

    const onSubmit = ()=>{
        console.log(formData,'formData');
    }
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
        />
    </>);
};

export default FormExample;