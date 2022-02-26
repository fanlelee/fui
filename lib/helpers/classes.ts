function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');

}

function scopedClassMaker(prefix: string) {
    return (name?: string, extra?: Array<string | undefined>) => {
        const result = ['fui', prefix, name].filter(Boolean).join('-');
        if(extra){
            const extraString = extra.filter(Boolean).join(' ')
            return [result, extraString].filter(Boolean).join(' ');
        }else{
            return result
        }
    };
}

export {scopedClassMaker};
export default classes;