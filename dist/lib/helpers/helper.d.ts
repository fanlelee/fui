import { SourceDataItem } from '../tree/tree';
export declare const noRepeat: (array: string[]) => string[];
interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {
}
export declare const flatten: (array?: RecursiveArray<string> | undefined) => string[];
export declare const childrenValues: (array: SourceDataItem) => string[];
export {};
