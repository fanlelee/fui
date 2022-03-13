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
    sourceData: SourceDataItem[]
}

const sc = scopedClassMaker('tree');

const Tree: React.FunctionComponent<TreeProps> = (props) => {
    const {className, sourceData, ...rest} = props;
    const renderItem = (item: SourceDataItem, level = 1) => {
        return (
            <div
                key={item.text}
                className={sc({['level-' + level]: true})}

            >
                <div className={sc('item')} style={{paddingLeft:level*10}}>{item.value}</div>
                {item.children?.map(sub => {
                    return renderItem(sub, level + 1);
                })}
            </div>
        );
    };
    return (<>
        <div className={sc('', className)} {...rest}>
            {sourceData.map((item) => {
                return renderItem(item);
            })}
        </div>
    </>);
};

export default Tree;