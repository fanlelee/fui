import React, {useState} from 'react';
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = () => {
    const [status, setStatus] = useState(false);

    return (
        <>
            <button onClick={() => {setStatus(i => !i);}}>dialog toggle</button>
            <Dialog
                visible={status}
                buttons={
                    [
                        <button onClick={() => setStatus(false)}>取消</button>,
                        <button onClick={() => setStatus(false)}>确定</button>
                    ]
                }
                onClickClose={() => setStatus(false)}
                closeOnClickMask={true}
            >
                <div>去不去吃饭？</div>
            </Dialog>
        </>
    );
};

export default DialogExample;