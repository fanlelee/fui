import React, {ChangeEventHandler, useState} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import {SourceDataItem} from './tree'

const sc = scopedClassMaker('tree');

interface TreeProps {
    parentProps: any,
    level: number
}

const TreeItem: React.FC<TreeProps> = (props) => {
    const {item, multiple, onChange, selected} = props.parentProps;
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
    const [collapse, setCollapse] = useState(true);
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
            {item.children?.map((sub:SourceDataItem) =>
                <TreeItem level={props.level + 1} parentProps={{...props.parentProps, item: sub}}/>
            )}
        </div>
    );
};

export default TreeItem;