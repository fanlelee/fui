import React, {useState} from 'react';
import Tree from './tree';


const TreeExample: React.FunctionComponent = () => {
    const [sourceData]  = useState([
        {
            text:'一',
            value:'1',
            children:[
                {text:'一的一', value:'1.1'},
                {text:'一的二', value:'1.2'}
            ]
        },
        {
            text:'二',
            value:'2',
            children:[
                {text:'二的一', value:'2.1'},
                {text:'二的二', value:'2.2'}
            ]
        }
    ])

    return (<>
            <Tree sourceData={sourceData}/>
    </>);
}

export default TreeExample