import React from 'react';
import { SourceDataItem } from './tree';
interface TreeProps {
    parentProps: {
        selected: string[];
        multiple: boolean;
        onChange: (newSelected: string[]) => void;
    };
    level: number;
    item: SourceDataItem;
    onItemClick: (T: string[]) => void;
}
declare const TreeItem: React.FC<TreeProps>;
export default TreeItem;
