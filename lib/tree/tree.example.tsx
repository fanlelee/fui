import React, {useState} from 'react';
import Tree, {SourceDataItem} from './tree';


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
    const [selectedData,setSelectedData] = useState(['1.1','2.2','2'])
    const onChange = (item:SourceDataItem,status:boolean)=>{
        if(status){
            setSelectedData([...selectedData,item.value])
        }else {
            setSelectedData(selectedData.filter(value => value!==item.value))
        }
    }

    return (<>
            <Tree sourceData={sourceData} selectedData = {selectedData} onChange={onChange}/>
    </>);
}

export default TreeExample