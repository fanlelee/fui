interface ClassToggles {
    [K: string]: boolean
}
//scopedClassMaker(componentName)('suffix')
//scopedClassMaker(componentName)('')
//scopedClassMaker(componentName)({'':true,'suffix':true})
//scopedClassMaker(componentName)({'': true, 'suffix': true},'hi')
const scopedClassMaker = (prefix: string) =>
    (name: string | ClassToggles, extra?: string) =>
        Object.entries(typeof name === 'string' ? {[name]: true} : name)
            .filter(k => k[1])
            .map(k => k[0])
            .map(k => ['fui', prefix, k].filter(Boolean).join('-'))
            .concat(extra ? [extra] : [])
            .join(' ');


export {scopedClassMaker};