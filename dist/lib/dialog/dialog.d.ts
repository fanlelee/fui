import React, { ReactElement, ReactNode } from 'react';
import './dialog.scss';
interface DialogProps {
    visible: boolean;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
}
declare const Dialog: React.FunctionComponent<DialogProps>;
declare const alert: (content: string) => void;
declare const confirm: (content: string, yes?: (() => void) | undefined, no?: (() => void) | undefined) => void;
declare const modal: (content: ReactNode, buttons?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined) => () => void;
export { alert, confirm, modal };
export default Dialog;
