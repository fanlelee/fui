import React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";

interface DemoProps {
    code: string
}

const Demo: React.FunctionComponent<DemoProps> = (props) => {
    return (<>
        {props.children}
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
    </>);
};

export default Demo;