import React, {useState} from 'react';
import Tree from './tree';

const TreeExample: React.FunctionComponent = () => {
    const [sourceData] = useState([
        {
            text: '1',
            value: '1',
            children: [
                {text: '1.1', value: '1.1'},
                {
                    text: '1.2', value: '1.2', children: [
                        {text: '1.2.1', value: '1.2.1'},
                        {text: '1.2.2', value: '1.2.2'}
                    ]
                }
            ]
        },
        {
            text: '2',
            value: '2',
            children: [
                {text: '2.1', value: '2.1'},
                {text: '2.2', value: '2.2'}
            ]
        }
    ]);
    const [selectedValues, setSelectedValues] = useState(['1.1', '2.2', '2']);
    const onChange = (selected: string[]) => {
        setSelectedValues(selected);
    };

    return (
        <Tree
            sourceData={sourceData}
            selected={selectedValues}
            onChange={onChange}
            multiple={true}
            initialCollapse={false}
        />
    );
};


export default TreeExample;