import {useEffect, useState} from 'react';

const useUpdate = (data: Boolean, fn: () => void) => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        setCount(count + 1);
    }, [data]);

    useEffect(() => {
        if (count > 1) {fn();}
    }, [count]);
};
export default useUpdate;