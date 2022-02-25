function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');

}

function scopedClassMaker(prefix: string) {
    return (name?: string, extra?: string) => {
        const result = ['fui', prefix, name].filter(Boolean).join('-');
        if(extra){
            return [result, extra].filter(Boolean).join(' ');
        }else{
            return result
        }
    };
}

export {scopedClassMaker};
export default classes;