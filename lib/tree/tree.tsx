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
    initialCollapse?:boolean
}

const sc = scopedClassMaker('tree');

const Tree: React.FunctionComponent<TreeProps> = (props) => {
    const {className, onChange, selected, sourceData,initialCollapse, multiple, ...rest} = props;
    const onItemClick = (selected:string[])=>{
        onChange(selected)
    }
    return (<>
        <div className={sc('', className)} {...rest}>
            {sourceData.map((item) =>
                <TreeItem key={item.value}
                          level={1}
                          onItemClick={onItemClick}
                          parentProps={({onChange, selected, multiple,initialCollapse:initialCollapse!})}
                          item={item} />
            )}
        </div>
    </>);
};

Tree.defaultProps = {
    initialCollapse:true
}

export default Tree;