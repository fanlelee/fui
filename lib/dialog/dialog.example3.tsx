import React from 'react';
import {modal} from './dialog';
import Button from '../button/button';

const DialogExample: React.FunctionComponent = () => {
    return (
        <div>
            <Button onClick={() => {
                const close = modal(
                    <div>
                        <p>modal</p>
                        <Button style={{marginLeft:240}} onClick={() => close()}>关闭</Button>
                    </div>
                );
            }}>
                modal
            </Button>
        </div>
    );
};

export default DialogExample;