import React, {useState} from 'react';
import Form from './form';


const FormExample: React.FunctionComponent = () => {
    const [formData] = useState({
        'username': 'abc',
        'password': '123456'
    });
    const [fields] = useState([
        {'name': 'username', 'label': '用户名', 'input': {'type': 'text'}},
        {'name': 'password', 'label': '密码', 'input': {'type': 'password'}}
    ]);
    return (<>
        <Form
            value={formData}
            fields={fields}
            buttons={
                <>
                    <button>取消</button>
                    <button>确定</button>
                </>
            }
        />
    </>);
};

export default FormExample;