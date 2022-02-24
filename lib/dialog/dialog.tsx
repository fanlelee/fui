import React, {ReactElement} from 'react';
import './dialog.scss';
import Icon from '../icon/icon';
import ReactDOM from 'react-dom';

interface DialogProps {
    visible: boolean,
    buttons?: Array<ReactElement>,
    onClose: React.MouseEventHandler,
    closeOnClickMask?: boolean
}

function scopedClassMaker(prefix: string) {
    return (name?: string) => {
        return ['fui', prefix, name].filter(Boolean).join('-');
    };
}


const sc = scopedClassMaker('dialog');

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {props.onClose(e);}
    };
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };

    const res = props.visible ?
        <>
            <div
                className={sc('mask')}
                onClick={onClickMask}
            />
            <div className={sc()}>
                <div
                    className={sc('close')}
                    onClick={onClickClose}
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
        : null;
    return (
        ReactDOM.createPortal(res, document.body)
    );
};
const alert = (content: string) => {
    const component = <Dialog
        visible={true}
        onClose={() => {
            ReactDOM.render(React.cloneElement(component, {visible: false}),div);
            ReactDOM.unmountComponentAtNode(div)
            div.remove()
        }}>
        {content}
    </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
};

export {alert};
export default Dialog;