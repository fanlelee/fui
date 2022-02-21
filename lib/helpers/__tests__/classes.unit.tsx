import classes from "../classes";
describe('classes', () => {
    it('接受一个className', () => {
        const x = classes('x')
        expect(x).toEqual('x')
    });
    it('不接受className为"undefined"', () => {
        const x = classes('abc',undefined)
        expect(x).toEqual('abc')
    });
    it('接受多个className', () => {
        const x = classes('abc','efg')
        expect(x).toEqual('abc efg')
    });
});