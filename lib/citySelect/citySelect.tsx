import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './citySelect.scss';
import {scopedClassMaker} from '../helpers/classes';
import Icon from '../icon/icon';

const pinyin = require('pinyin');

interface CitySelectProps {
    cityList: string[]
}

const sc = scopedClassMaker('citySelect');
const CitySelect: React.FunctionComponent<CitySelectProps> = (props) => {
    const [dialogVisible, setDialogVisible] = useState(true);
    let map: { [key: string]: string[] } = {};
    props.cityList.map(city => {
        const letter = pinyin(city, {style: pinyin.STYLE_NORMAL})[0][0].substr(0, 1);
        map[letter] = map[letter] || [];
        map[letter].push(city);
    });

    console.log(map);

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
                    <CurrentLocation/>
                    <div className={dsc('cityList')}>
                        <h3>全部城市</h3>

                    </div>
                </div>
            </div>
        ), document.body
    );
};

const CurrentLocation: React.FC = () => {
    const [city, setCity] = useState<string>('加载中...');
    useEffect(() => {
        const request = new XMLHttpRequest();
        request.open('get', 'http://ip-api.com/json/?lang=zh-CN');
        request.onload = () => {
            if ((request.status >= 200 && request.status < 300)
                || request.status === 304) {
                setCity(JSON.parse(request.responseText).city);
            } else {
                console.log(request.status);
            }
        };
        request.onerror = () => {
            console.log('error');
            setCity('获取失败');
        };
        request.send();
    }, []);
    return (
        <div className={dsc('location')}>
            定位城市:
            <span>
            <Icon name='location' style={{height: '1em', width: '1em'}}/>
                {city}
        </span>
        </div>
    );

};

export default CitySelect;