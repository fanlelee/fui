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
    selected: string[],
    onChange: (item: SourceDataItem, status: boolean) => void
} & (
    { selected: string[], multiple: true } |
    { selected: string, multiple: false }
    )

const sc = scopedClassMaker('tree');
const renderItem = (item: SourceDataItem, selected: string[], onChange: (item: SourceDataItem, status: boolean) => void, level = 1) => {
    return (
        <div
            key={item.text}
            className={sc({['level-' + level]: true})}

        >
            <div className={sc('item')} style={{paddingLeft: `${(level - 1) * 2}em`}}>
                <input
                    type="checkbox"
                    checked={selected.indexOf(item.value) >= 0}
                    onChange={(e) => onChange(item, e.target.checked)}
                />
                {item.text}
            </div>
            {item.children?.map(sub => {
                return renderItem(sub, selected, onChange, level + 1);
            })}
        </div>
    );
};
const Tree: React.FunctionComponent<TreeProps> = (props) => {
    const {className, onChange, selected, sourceData, ...rest} = props;

    return (<>
        <div className={sc('', className)} {...rest}>
            {sourceData.map((item) => {
                return renderItem(item, selected, onChange);
            })}
        </div>
    </>);
};

export default Tree;