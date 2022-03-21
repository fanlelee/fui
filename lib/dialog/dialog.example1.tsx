import React, {useState} from 'react';
import Dialog from './dialog';
import Button from '../button/button';

const DialogExample: React.FunctionComponent = () => {
    const [status, setStatus] = useState(false);
    return (
        <div>
            <Button onClick={() => {setStatus(i => !i);}}>click here</Button>
            <Dialog
                visible={status}
                buttons={
                    [
                        <Button onClick={() => setStatus(false)}>取消</Button>,
                        <Button onClick={() => setStatus(false)} level='important'>确定</Button>
                    ]
                }
                onClose={() => setStatus(false)}
                closeOnClickMask={true}
                headerInfo='Basic Dialog'
            >
                <div>
                    <div>to be or not to be？</div>
                    <div>to be or not to be？</div>
                    <div>to be or not to be？</div>
                </div>
            </Dialog>
        </div>
    );

};

export default DialogExample;