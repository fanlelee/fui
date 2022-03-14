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
} & (
    {
        selected: string[],
        multiple: true,
        onChange: (newSelected: string[]) => void
    } |
    {
        selected: string,
        multiple?: false,
        onChange: (newSelected: string) => void
    }
    )

const sc = scopedClassMaker('tree');

const Tree: React.FunctionComponent<TreeProps> = (props) => {
    const {className, onChange, selected, sourceData, multiple, ...rest} = props;

    return (<>
        <div className={sc('', className)} {...rest}>
            {sourceData.map((item) =>
                <TreeItem level={1} parentProps={{onChange, selected,item, multiple}}/>
            )}
        </div>
    </>);
};


export default Tree;