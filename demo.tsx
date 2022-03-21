import React, {useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import Button from './lib/button/button';

interface DemoProps {
    code: string
}

const Demo: React.FunctionComponent<DemoProps> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false)
    const highlight = (
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
    );
    return (<div className='demo' style={{marginBottom:80}}>
        <div>{props.children}</div>
        <div style={{marginBottom:16}}>
            <Button style={{
                marginTop: '8px',
                lineHeight: '4px',
                padding: '2px 4px',
                borderRadius: '12px'}}
                    onClick={()=>{setCodeVisible((i=>!i))}}
                    icon={{name:'code'}}
                    level='important'
            >

                {codeVisible ? '隐藏代码':'显示代码'}
            </Button>
            {codeVisible && highlight}
        </div>
    </div>);
};

export default Demo;