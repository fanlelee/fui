import {useEffect, useRef} from 'react';

const useUpdate = (data: Boolean, fn: () => void) => {
    const first = useRef(true);
    useEffect(() => {
        if (first.current) {
            first.current = false
            return;
        }
        fn()
    }, [data]);

};
export default useUpdate;