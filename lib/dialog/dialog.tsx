import React, {ReactElement} from 'react';
import './dialog.scss';
import Icon from '../icon/icon';

interface DialogProps {
    visible: boolean,
    buttons?: Array<ReactElement>,
    onClickClose: React.MouseEventHandler,
    closeOnClickMask?: boolean
}

function scopedClassMaker(prefix: string) {
    return (name?: string) => {
        return ['fui', prefix, name].filter(Boolean).join('-');
    };
}

const sc = scopedClassMaker('dialog');

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    const onClickMask:React.MouseEventHandler = (e)=>{
        if(props.closeOnClickMask){props.onClickClose(e)}
    }
    return (
        props.visible ?
            <>
                <div
                    className={sc('mask')}
                    onClick={onClickMask}
                />
                <div className={sc()}>
                    <div
                        className={sc('close')}
                        onClick={props.onClickClose}
                    >
                        <Icon name='close'/>
                    </div>
                    <header className={sc('header')}>
                        信息提示
                    </header>
                    <main className={sc('main')}>
                        {props.children}
                    </main>
                    <footer className={sc('footer')}>
                        {
                            props.buttons &&
                            props.buttons.map((button, index) =>
                                React.cloneElement(button, {key: index})
                            )
                        }
                    </footer>
                </div>
            </>
            : null
    );
};
export default Dialog;