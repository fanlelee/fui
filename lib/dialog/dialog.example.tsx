import React, {useState} from 'react';
import Dialog,{alert} from './dialog';

const DialogExample: React.FunctionComponent = () => {
    const [status, setStatus] = useState(false);
    const [status2, setStatus2] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => {setStatus(i => !i);}}>dialog toggle</button>
                <Dialog
                    visible={status}
                    buttons={
                        [
                            <button onClick={() => setStatus(false)}>取消</button>,
                            <button onClick={() => setStatus(false)}>确定</button>
                        ]
                    }
                    onClose={() => setStatus(false)}
                    closeOnClickMask={true}
                >
                    <div>去不去吃饭？</div>
                </Dialog>
            </div>

            <div>
                <button onClick={() => {setStatus2(i => !i);}}>dialog2</button>
                <Dialog
                    visible={status2}
                    buttons={
                        [
                            <button onClick={() => setStatus2(false)}>取消2</button>,
                            <button onClick={() => setStatus2(false)}>确定2</button>
                        ]
                    }
                    onClose={() => setStatus2(false)}
                    closeOnClickMask={true}
                >
                    <div>去不去吃饭？2</div>
                </Dialog>
            </div>
            <div>
                <button onClick={() => {alert('走不走？')}}>dialog3</button>
            </div>
        </>
    );
};

export default DialogExample;