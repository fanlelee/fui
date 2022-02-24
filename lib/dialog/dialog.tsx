import React from 'react';
import './dialog.scss';
import Icon from '../icon/icon';

interface DialogProps {
    visible: boolean
}

function scopedClassMaker(prefix: string) {
    return (name?: string)=> {
        return ['fui', prefix, name].filter(Boolean).join('-');
    };
}
const sc = scopedClassMaker('dialog');

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    return (
        props.visible ?
            <>
                <div className={sc('mask')}/>
                <div className={sc()}>
                    <div className={sc('close')}><Icon name='close'/></div>
                    <header className={sc('header')}>
                        信息提示
                    </header>
                    <main className={sc('main')}>
                        {props.children}
                    </main>
                    <footer className={sc('footer')}>
                        <button className={sc('cancel')}>取消</button>
                        <button className={sc('ok')}>确定</button>
                    </footer>
                </div>
            </>
            : null
    );
};
export default Dialog;