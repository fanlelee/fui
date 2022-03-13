import React from 'react';
import './tree.scss';
import {scopedClassMaker} from '../helpers/classes';

interface SourceDataItem {
    text: string,
    value: string,
    children?: SourceDataItem[]
}

interface TreeProps {
    className?: string
    sourceData: SourceDataItem[],
    selectedData:string[]
}

const sc = scopedClassMaker('tree');
const renderItem = (item: SourceDataItem,selectedData:string[], level = 1) => {
    return (
        <div
            key={item.text}
            className={sc({['level-' + level]: true})}

        >
            <div className={sc('item')} style={{paddingLeft:`${(level-1)*2}em`}}>
                <input type="checkbox" checked={selectedData.indexOf(item.value)>=0}/>
                {item.text}
            </div>
            {item.children?.map(sub => {
                return renderItem(sub, selectedData,level + 1);
            })}
        </div>
    );
};
const Tree: React.FunctionComponent<TreeProps> = (props) => {
    const {className,selectedData, sourceData, ...rest} = props;

    return (<>
        <div className={sc('', className)} {...rest}>
            {sourceData.map((item) => {
                return renderItem(item,selectedData);
            })}
        </div>
    </>);
};

export default Tree;