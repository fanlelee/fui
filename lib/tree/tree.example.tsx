import React, {useState} from 'react';
import Tree from './tree';


const TreeExample: React.FunctionComponent = () => {
    const [sourceData]  = useState([
        {
            text:'一',
            value:'1',
            children:[
                {text:'一.一', value:'1.1'},
                {text:'一.二', value:'1.2'}
            ]
        },
        {
            text:'二',
            value:'2',
            children:[
                {text:'二.一', value:'2.1'},
                {text:'二.二', value:'2.2'}
            ]
        }
    ])

    return (<>
            <Tree sourceData={sourceData} selectedData = {['1.1','2.2','2']}/>
    </>);
}

export default TreeExample