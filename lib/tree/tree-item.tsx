import React, {ChangeEventHandler, useEffect, useRef, useState} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import {SourceDataItem} from './tree';
import Icon from '../icon/icon';
import {childrenValues} from '../helpers/helper';

interface TreeProps {
    parentProps: {
        selected: string[],
        multiple: boolean,
        onChange: (newSelected: string[]) => void,
        initialCollapse:boolean
    },
    level: number,
    item: SourceDataItem,
    onItemClick: (T: string[]) => void
}

const sc = scopedClassMaker('tree');
const TreeItem: React.FC<TreeProps> = (props) => {
    const {multiple, onChange, selected,initialCollapse} = props.parentProps;
    const {item, onItemClick} = props;
    const [collapse, setCollapse] = useState(initialCollapse);
    const inputRef = useRef<HTMLInputElement>(null);


    const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        const checked = e.target.checked;
        if (checked) {
            multiple ?
                onItemClick([
                    ...selected,
                    ...childrenValues(item),
                    item.value]) :
                onItemClick([item.value]);
        } else {
            multiple ?
                onItemClick(selected.filter(value =>
                    value !== item.value &&
                    childrenValues(item).indexOf(value) === -1)) :
                onItemClick([]);
        }
    };


    useEffect(() => {
        if (!item.children) {
            inputRef.current!.checked = selected.indexOf(item.value) >= 0;
            return;
        } else {
            onItemChange(selected);
        }
    }, []);


    const onItemChange = (currentSelected: string[]) => {
        const len = intersect(childrenValues(item), currentSelected).length;
        const finalSelectValues = [];
        if (len > 0) {
            if (len === childrenValues(item).length) {//全选
                finalSelectValues.push(...currentSelected, item.value);
                inputRef.current!.indeterminate = false;
            } else { //半选
                if (currentSelected.indexOf(item.value) > 0) {
                    finalSelectValues.push(...(currentSelected.filter(i => i !== item.value)));
                } else {
                    finalSelectValues.push(...currentSelected);
                }
                inputRef.current!.indeterminate = true;
            }
        } else { //不选
            inputRef.current!.indeterminate = false;
            if (currentSelected.indexOf(item.value) > 0) {
                finalSelectValues.push(...(currentSelected.filter(i => i !== item.value)));
            } else {
                finalSelectValues.push(...currentSelected);
            }
        }
        onChange(finalSelectValues);
        onItemClick(finalSelectValues);
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
                    ref={inputRef}
                    type="checkbox"
                    checked={selected.indexOf(item.value) >= 0}
                    onChange={onChangeInput}
                />
                <span className={sc('text')}>{item.text}</span>
                {
                    item.children &&
                    <span
                        className={sc('collapse-icon')}
                        onClick={(e) => {
                            e.preventDefault();
                            setCollapse(!collapse);
                        }}
                    >
                        <Icon name='collapse' className={sc(`collapse-icon-${collapse ? 'up' : 'down'}`)}/>
                    </span>
                }

            </label>
            {item.children &&
            <div className={sc('children')}>
                {item.children.map((sub: SourceDataItem) =>
                    <TreeItem onItemClick={onItemChange} key={sub.value} level={props.level + 1} item={sub}
                              parentProps={props.parentProps}/>
                )}
            </div>}
        </div>
    );
};

function intersect<T>(array1: T[], array2: T[]): T[] {
    const rest: T[] = [];
    for (let i = 0; i < array1.length; i++) {
        array2.indexOf(array1[i]) >= 0 && rest.push(array1[i]);
    }
    return rest;
}

export default TreeItem;