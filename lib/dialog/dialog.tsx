import React from 'react';

interface DialogProps {
    visible: boolean
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    return (
        props.visible ?
            <div>dialog</div>
            : null
    );
};
export default Dialog;