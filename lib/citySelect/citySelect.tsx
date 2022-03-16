import React, {Dispatch, SetStateAction, useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './citySelect.scss';
import {scopedClassMaker} from '../helpers/classes';
import Icon from '../icon/icon';

const pinyin = require('pinyin');

interface CitySelectProps {
    cityList: string[];
    onChoose: (K: string) => void;
}

const sc = scopedClassMaker('citySelect');

interface CityContext {
    map: { [key: string]: string[] };
    onChoose: (K: string) => void;
    setDialogVisible: Dispatch<SetStateAction<boolean>>
}

const MapContext = React.createContext<CityContext>({
    map: {},
    onChoose: () => {},
    setDialogVisible: () => {}
});
const CitySelect: React.FunctionComponent<CitySelectProps> = (props) => {
    const [dialogVisible, setDialogVisible] = useState(true);
    const map: CityContext['map'] = {};

    props.cityList.map(city => {
        const letter = pinyin(city, {style: pinyin.STYLE_NORMAL})[0][0].substr(0, 1).toUpperCase();
        map[letter] = map[letter] || [];
        map[letter].push(city);
    });


    return (<MapContext.Provider value={{map, onChoose: props.onChoose,setDialogVisible}}>
        <div className={sc('')} onClick={() => {setDialogVisible(true);}}>{props.children}</div>
        {dialogVisible && <Dialog onClose={() => setDialogVisible(false)}/>}
    </MapContext.Provider>);
};

const dsc = scopedClassMaker('citySelect-dialog');
const Dialog: React.FC<{ onClose: () => void }> = (props) => {
    const {map, onChoose,setDialogVisible} = useContext(MapContext);
    console.log(Object.entries(map));
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
                        <ol className={dsc('cityIndexList')}>
                            {Object.keys(map).sort().map(index => <li key={index}>{index}</li>)}
                        </ol>
                        {Object.entries(map).map((list, i) =>
                            <ul key={i} className={dsc('cities')}>
                                <li className={dsc('index')} key={list[0]}>{list[0]}</li>
                                {list[1].map(city =>
                                    <li className={dsc('city')} key={city}
                                        onClick={() => {setDialogVisible(false);onChoose(city);}}>
                                        {city}
                                    </li>
                                )}
                                <li className={dsc('city')}>更多《</li>
                            </ul>
                        )}
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