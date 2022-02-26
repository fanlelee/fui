function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');

}

interface ClassToggles {
    [K: string]: boolean
}

function scopedClassMaker(prefix: string) {
    return (name: string | ClassToggles, extra?: string) => {

        const result =
            typeof name === 'string' ?
                ['fui', prefix, name].filter(Boolean).join('-') :
                Object.entries(name)
                    .filter(k => k[1])
                    .map(k => k[0])
                    .map(k => ['fui', prefix, k].filter(Boolean).join('-'))
                    .join(' ');


        if (extra) {
            return [result, extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    };
}

export {scopedClassMaker};
export default classes;