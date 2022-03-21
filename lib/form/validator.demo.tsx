import React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';

const DialogDemo: React.FunctionComponent = () => {
    const formData = `
    const formData = {
        username:'lisa', 
        password: '123456',
        phone:'18888888888'
    } 
    `;
    const rules = `
    const rules = [
        {key:'username', require:true, maxLength:20,minLength:2},
        {key:'password', require:true, pattern: /^[a-zA-Z0-9_]{8}$/},
        {key:'phone', maxLength:11},
    ]
    `;
    const use = `
    import Validator from './validator';
    Validator(formData, rules, (errors) => {
            setErrors(errors);
    });
    `
    const result = `
    { 
        username:['必填','太长','...']
        password:['太短','...']
    }
    `;
    const async = `
    const rules = [
        {
            key: 'username',
            validate: checkUserName
        }
    ]
    const checkUserName = (name: string, succeed: (reason?: any) => void, fail: (reason?: any) => void) => {
        setTimeout(() => {
            if (name === 'abc') {
                succeed('用户名正确');
            } else {
                fail('用户名错误');
            }
        });
    };
    const onSubmit = () => {
        Validator(formData, rules, (errors) => {
            setErrors(errors);
        });
    };
    `

    return (
        <div>
            <h3>示例说明：</h3>
            <div>
                1、需要校验的数据：
                <MyHighlight code={formData}/>
            </div>
            <div>
                2、需要校验的数据：
                <MyHighlight code={rules}/>
            </div>
            <div>
                3、怎么用：
                <MyHighlight code={use}/>
            </div>
            <div>
                4、返回的errors结果：
                <MyHighlight code={result}/>
            </div>
            <div>
                5、异步校验示例：
                <MyHighlight code={async}/>
            </div>
        </div>
    );
};

const MyHighlight:React.FC<{code:string}> = (props)=>{
    return (
        <Highlight {...defaultProps} code={props.code} language="jsx">
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={style}>
              {tokens.map((line, i) => (
                  <div {...getLineProps({line, key: i})}>
                      {line.map((token, key) => (
                          <span {...getTokenProps({token, key})} />
                      ))}
                  </div>
              ))}
            </pre>
            )}
        </Highlight>
    )
}

export default DialogDemo;