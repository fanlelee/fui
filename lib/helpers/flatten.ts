export interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {}

const flatten = (array?: RecursiveArray<string>): string[] => {
    if (!array) return [];
    return array.reduce<string[]>((result, current) =>
        result.concat(typeof current === 'string' ? current : flatten(current)), []);
};
export default flatten