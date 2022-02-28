import React from 'react';

interface DemoProps {
    code: string
}

const Demo: React.FunctionComponent<DemoProps> = (props) => {
    return (<>
        <div>{props.code}</div>
        {props.children}
    </>);
};

export default Demo;