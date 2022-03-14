import React, {ChangeEventHandler, useState} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import {SourceDataItem, TreeData} from './tree';
import useUpdate from '../hooks/useUpdate';

const sc = scopedClassMaker('tree');

interface TreeProps {
    parentProps: TreeData,
    level: number,
    item: SourceDataItem
}

const TreeItem: React.FC<TreeProps> = (props) => {
    const {multiple, onChange, selected} = props.parentProps;
    const {item} = props;

    const [collapse, setCollapse] = useState(false);



    useUpdate(collapse, () => console.log('collapse动了'));
    const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        const checked = e.target.checked;
        if (checked) {
            multiple === true ? (onChange as (newSelected: string[]) => void)([...(selected as string[]), item.value]) :
                (onChange as (newSelected: string) => void)((item.value as string));
        } else {
            multiple ? (onChange as (newSelected: string[]) => void)((selected as string[]).filter(value => value !== item.value)) :
                (onChange as (newSelected: string) => void)('');
        }
    };

    return (
        <div
            key={item.text}
            className={sc({['level-' + props.level]: true, collapse})}
        >
            <label
                className={sc('item')}
                style={{
                    paddingLeft: `${(props.level - 1) * 2}em`
                }}
            >
                <input
                    type="checkbox"
                    checked={multiple ? selected.indexOf(item.value) >= 0 : selected === item.value}
                    onChange={onChangeInput}
                />
                {item.text}
                {
                    item.children && (collapse ?
                        <span onClick={(e) => {
                            e.preventDefault();
                            setCollapse(!collapse);
                        }}>+</span> :
                        <span onClick={(e) => {
                            e.preventDefault();
                            setCollapse(!collapse);
                        }}>-</span>)
                }

            </label>
            {item.children?.map((sub: SourceDataItem) =>
                <TreeItem key={sub.value} level={props.level + 1} item={sub} parentProps={props.parentProps}/>
            )}
        </div>
    );
};

export default TreeItem;