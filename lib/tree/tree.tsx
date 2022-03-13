import React from 'react';
import './tree.scss';
import {scopedClassMaker} from '../helpers/classes';

export interface SourceDataItem {
    text: string,
    value: string,
    children?: SourceDataItem[]
}

type TreeProps = {
    className?: string
    sourceData: SourceDataItem[],
    onChange: (item: SourceDataItem, status: boolean) => void
} & (
    { selected: string[], multiple: true } |
    { selected: string, multiple?: false }
    )

const sc = scopedClassMaker('tree');

const Tree: React.FunctionComponent<TreeProps> = (props) => {
    const {className, onChange, selected, sourceData, multiple, ...rest} = props;
    const renderItem = (item: SourceDataItem, level = 1) => {
        return (
            <div
                key={item.text}
                className={sc({['level-' + level]: true})}
            >
                <div className={sc('item')} style={{paddingLeft: `${(level - 1) * 2}em`}}>
                    <input
                        type="checkbox"
                        checked={multiple ? selected.indexOf(item.value) >= 0 : selected === item.value}
                        onChange={(e) => onChange(item, e.target.checked)}
                    />
                    {item.text}
                </div>
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