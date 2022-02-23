import React, {useState} from 'react';
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = () => {
    const [status, setStatus] = useState(false);
    return (
        <>
            <button onClick={() => {setStatus(i => !i);}}>dialog toggle</button>
            <Dialog visible={status}/>
        </>
    );
};

export default DialogExample;