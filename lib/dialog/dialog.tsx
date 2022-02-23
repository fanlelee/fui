import React from 'react';
import './dialog.scss';
import Icon from '../icon/icon'

interface DialogProps {
    visible: boolean
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    return (
        props.visible ?
            <>
                <div className='fui-dialog-mask'/>
                <div className='fui-dialog'>
                    <div><Icon name='close'/></div>
                    <header>信息提示</header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                        <button>取消</button>
                        <button>确定</button>
                    </footer>
                </div>
            </>
            : null
    );
};
export default Dialog;