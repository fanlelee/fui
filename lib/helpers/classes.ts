interface ClassToggles {
    [K: string]: boolean
}

function scopedClassMaker(prefix: string) {
    return (name: string | ClassToggles, extra?: string) => {
        const namesObject = typeof name === 'string' ? {[name]: true} : name;
        return  Object.entries(namesObject)
            .filter(k => k[1])
            .map(k => k[0])
            .map(k => ['fui', prefix, k].filter(Boolean).join('-'))
            .concat(extra?[extra]:[])
            .join(' ');

    };
}

export {scopedClassMaker};