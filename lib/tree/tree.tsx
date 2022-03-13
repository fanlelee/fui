import React from 'react';
import './tree.scss';
import {scopedClassMaker} from '../helpers/classes';

export interface SourceDataItem {
    text: string,
    value: string,
    children?: SourceDataItem[]
}

interface TreeProps {
    className?: string
    sourceData: SourceDataItem[],
    selectedData: string[],
    onChange: (item:SourceDataItem,status:boolean) => void
}

const sc = scopedClassMaker('tree');
const renderItem = (item: SourceDataItem, selectedData: string[],onChange:(item:SourceDataItem,status:boolean) => void, level = 1) => {
    return (
        <div
            key={item.text}
            className={sc({['level-' + level]: true})}

        >
            <div className={sc('item')} style={{paddingLeft: `${(level - 1) * 2}em`}}>
                <input
                    type="checkbox"
                    checked={selectedData.indexOf(item.value) >= 0}
                    onChange={(e)=>onChange(item,e.target.checked)}
                />
                {item.text}
            </div>
            {item.children?.map(sub => {
                return renderItem(sub, selectedData, onChange,level + 1);
            })}
        </div>
    );
};
const Tree: React.FunctionComponent<TreeProps> = (props) => {
    const {className,onChange, selectedData, sourceData, ...rest} = props;

    return (<>
        <div className={sc('', className)} {...rest}>
            {sourceData.map((item) => {
                return renderItem(item, selectedData,onChange);
            })}
        </div>
    </>);
};

export default Tree;