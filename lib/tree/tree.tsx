import React from 'react';
import './tree.scss';
import {scopedClassMaker} from '../helpers/classes';
import TreeItem from './tree-item';

export interface SourceDataItem {
    text: string,
    value: string,
    children?: SourceDataItem[]
}

type TreeProps = {
    className?: string
    sourceData: SourceDataItem[]
    selected: string[],
    multiple: boolean,
    onChange: (newSelected: string[]) => void
}

const sc = scopedClassMaker('tree');

const Tree: React.FunctionComponent<TreeProps> = (props) => {
    const {className, onChange, selected, sourceData, multiple, ...rest} = props;
    const onItemClick = (selected:string[])=>{
        onChange(selected)
    }
    return (<>
        <div className={sc('', className)} {...rest}>
            {sourceData.map((item) =>
                <TreeItem key={item.value}
                          level={1}
                          onItemClick={onItemClick}
                          parentProps={({onChange, selected, multiple})}
                          item={item} />
            )}
        </div>
    </>);
};

export default Tree;