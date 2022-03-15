import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './citySelect.scss';
import {scopedClassMaker} from '../helpers/classes';
import Icon from '../icon/icon';

const sc = scopedClassMaker('citySelect');

const CitySelect: React.FunctionComponent = (props) => {
    const [dialogVisible, setDialogVisible] = useState(true);
    return (<>
        <div className={sc('')} onClick={() => {setDialogVisible(true);}}>{props.children}</div>
        {dialogVisible && <Dialog onClose={() => setDialogVisible(false)}/>}
    </>);
};
const dsc = scopedClassMaker('citySelect-dialog');
const Dialog: React.FC<{ onClose: () => void }> = (props) => {
    return ReactDOM.createPortal((
            <div className={dsc('')}>
                <header className={dsc('header')}>
                    <span onClick={props.onClose} className={dsc('back')}><Icon name='left'/></span>
                    选择城市
                </header>
                <div className={dsc('cityBox')}>
                    <div className={dsc('location')}>
                        定位城市:
                        <span>
                        <Icon name='location' style={{height: '1em', width: '1em'}}/>
                        成都
                        </span>
                    </div>
                    <div className={dsc('cityList')}>
                        <h3>全部城市</h3>

                    </div>
                </div>
            </div>
        ), document.body
    );
};

export default CitySelect;