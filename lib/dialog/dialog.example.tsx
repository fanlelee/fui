import React, {useState} from 'react';
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = () => {
    const [status, setStatus] = useState(false);
    return (
        <>
            <button onClick={() => {setStatus(i => !i);}}>dialog toggle</button>
            <Dialog visible={status}>
                <div>去不去吃饭？</div>
            </Dialog>
        </>
    );
};

export default DialogExample;