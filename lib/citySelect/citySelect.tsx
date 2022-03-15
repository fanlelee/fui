import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './citySelect.scss';
import {scopedClassMaker} from '../helpers/classes';
const sc = scopedClassMaker('citySelect')

const CitySelect: React.FunctionComponent = (props) => {
    const [dialogVisible, setDialogVisible] = useState(false);
    return (<>
        <div onClick={() => {setDialogVisible(true);}}>{props.children}</div>
        {dialogVisible && <Dialog onClose={()=>setDialogVisible(false)}/>}
    </>);
}

const Dialog: React.FC<{onClose:()=>void}> = (props) => {
    return ReactDOM.createPortal(
        (
            <div
                className={sc('dialog')}
                onClick={props.onClose}
            >
                弹窗内容
            </div>
        ),
        document.body);
};

export default CitySelect;