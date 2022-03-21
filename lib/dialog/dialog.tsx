import React, {ReactElement, ReactNode} from 'react';
import './dialog.scss';
import Icon from '../icon/icon';
import ReactDOM from 'react-dom';
import Button from '../button/button';

interface DialogProps {
    visible: boolean,
    buttons?: Array<ReactElement>,
    onClose: React.MouseEventHandler,
    closeOnClickMask?: boolean,
    headerInfo?:string
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
                    {props.headerInfo}
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>
                {props.buttons &&
                <footer className={sc('footer')}>
                    {
                        props.buttons &&
                        props.buttons.map((button, index) =>
                            React.cloneElement(button, {key: index})
                        )
                    }
                </footer>
                }
            </div>
        </>
        : null;
    return (
        ReactDOM.createPortal(res, document.body)
    );
};

Dialog.defaultProps = {
    closeOnClickMask: false,
    headerInfo:'信息提示'
};
const alert = (content: string) => {
    const button = <Button onClick={() => onClose()} level='important'>确定</Button>;
    const onClose = modal(content,[button]);
};
const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onClickNo = () => {
        onClose();
        no && no();
    };
    const onClickYes = () => {
        onClose();
        yes && yes();
    };
    const onClose = modal(content, [
        <Button onClick={onClickNo}>取消</Button>,
        <Button onClick={onClickYes} level='important'>确定</Button>
    ]);
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        console.log('close了');
    };
    const component = <Dialog
        visible={true}
        onClose={onClose}
        buttons={buttons}
    >
        {content}
    </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);

    return onClose;
};


export {alert, confirm, modal};
export default Dialog;