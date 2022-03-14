import React, {ChangeEventHandler, useState} from 'react';
import './tree.scss';
import {scopedClassMaker} from '../helpers/classes';

interface SourceDataItem {
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

    const renderItem = (item: SourceDataItem, level = 1) => {
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
                className={sc({['level-' + level]: true, collapse})}
            >
                <label
                    className={sc('item')}
                    style={{
                        paddingLeft: `${(level - 1) * 2}em`
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