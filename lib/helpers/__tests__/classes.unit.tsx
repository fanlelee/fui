import {scopedClassMaker} from '../classes';

describe('scopedClassMaker', () => {
    it('接受className对象、字符串', () => {
        const sc = scopedClassMaker('component');
        expect(sc('abc')).toEqual('fui-component-abc');
        expect(sc('')).toEqual('fui-component');
        expect(sc({'a': true})).toEqual('fui-component-a');
        expect(sc({'': true, 'a': true})).toEqual('fui-component fui-component-a');
        expect(sc({'a': true,'b':false,'c':true})).toEqual('fui-component-a fui-component-c');
        expect(sc('','my-class')).toEqual('fui-component my-class');
        expect(sc('','my-class hi')).toEqual('fui-component my-class hi');
        expect(sc({'': true, 'a': true},'hi')).toEqual('fui-component fui-component-a hi');
    });
});