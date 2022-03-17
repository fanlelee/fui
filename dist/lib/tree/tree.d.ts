import React from 'react';
import './tree.scss';
export interface SourceDataItem {
    text: string;
    value: string;
    children?: SourceDataItem[];
}
declare type TreeProps = {
    className?: string;
    sourceData: SourceDataItem[];
    selected: string[];
    multiple: boolean;
    onChange: (newSelected: string[]) => void;
};
declare const Tree: React.FunctionComponent<TreeProps>;
export default Tree;
