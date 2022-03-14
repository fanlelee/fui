import React, {useState} from 'react';
import Tree from './tree';


const TreeExample: React.FunctionComponent = () => {
    const [sourceData] = useState([
        {
            text: '一',
            value: '1',
            children: [
                {text: '一.一', value: '1.1'},
                {text: '一.二', value: '1.2',children:[
                        {text: '一.二.一', value: '1.2.1'},
                        {text: '一.二.二', value: '1.2.2'}
                    ]}
            ]
        },
        {
            text: '二',
            value: '2',
            children: [
                {text: '二.一', value: '2.1'},
                {text: '二.二', value: '2.2'}
            ]
        }
    ]);
    const [selectedValues, setSelectedValues] = useState(['1.1', '2.2', '2']);
    const [selectedValue, setSelectedValue] = useState('2');
    const onChange = (selected:string) => {
            setSelectedValue(selected);
    };
    const onChange2 = (selected:string[]) => {
            setSelectedValues(selected);
    };

    return (<>
        单选：
        <Tree
            sourceData={sourceData}
            selected={selectedValue}
            onChange={onChange}
        />


        <hr/>
        多选：
        <Tree
        sourceData={sourceData}
        selected={selectedValues}
        onChange={onChange2}
        multiple={true}
    />

    </>);
};

export default TreeExample;