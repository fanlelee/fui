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
    return (<>
        <div className={sc('', className)} {...rest}>
            {sourceData.map((item,i) => {
                return (
                    <div key={i}>
                        {item.value}
                        {item.children&&item.children.map((child,j)=>{
                            return (
                                <div key={j}>{child.value}</div>
                            )
                        })}
                    </div>
                );
            })}
        </div>
    </>);
};

export default Tree;