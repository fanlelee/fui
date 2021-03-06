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
    const [selectedValue, setSelectedValue] = useState(['2.1']);
    const onChange = (selected: []) => {
        setSelectedValue(selected);
    };

    return (
        <Tree
            sourceData={sourceData}
            selected={selectedValue}
            onChange={onChange}
            multiple={false}
            initialCollapse={false}
        />
    );
};


export default TreeExample;