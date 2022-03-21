import * as React from 'react';
import Button from './button';


const ButtonExample: React.FunctionComponent = () => {
    return (
        <div>
            <Button level='important' icon={{name:'loading',location:'left'}}>加载中</Button>
            <Button level='important' icon={{name:'download',location:'right'}}>下载</Button>
            <Button icon={{name:'download',location:'right'}}>下载</Button>
            <Button icon={{name:'copy'}}/>
        </div>
    );
};


export default ButtonExample;