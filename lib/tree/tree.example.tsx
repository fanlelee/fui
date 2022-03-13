import React, {useState} from 'react';
import Tree, {SourceDataItem} from './tree';


const TreeExample: React.FunctionComponent = () => {
    const [sourceData] = useState([
        {
            text: '一',
            value: '1',
            children: [
                {text: '一.一', value: '1.1'},
                {text: '一.二', value: '1.2'}
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
    const multiple = false;
    const onChange = (item: SourceDataItem, status: boolean) => {
        if (status) {
            multiple ? setSelectedValues([...selectedValues, item.value]) :
                setSelectedValue(item.value);
        } else {
            multiple ? setSelectedValues(selectedValues.filter(value => value !== item.value)) :
                setSelectedValue('');
        }
    };

    return (<>
        <Tree
            sourceData={sourceData}
            selected={selectedValue}
            onChange={onChange}
            // multiple={multiple}
        />
    </>);
};

export default TreeExample;