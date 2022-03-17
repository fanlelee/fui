import {SourceDataItem} from '../tree/tree';

export const noRepeat = (array: string[]) => {
    const obj: { [k: string]: boolean } = {};
    array.map(item => obj[item] = true);
    return Object.keys(obj);
};


interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {}
export const flatten = (array?: RecursiveArray<string>): string[] => {
    if (!array) return [];
    return array.reduce<string[]>((result, current) =>
        result.concat(typeof current === 'string' ? current : flatten(current)), []);
};

export const childrenValues = (array: SourceDataItem): string[] => {
    return noRepeat(
        flatten(
            array.children ? array.children.map(i => {
                return [i.value, childrenValues(i)];
            }) : []
        )
    );
};

