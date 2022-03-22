import React from 'react';
import Demo from '../../demo'
import CitySelectExample from './citySelect.example';

const CitySelectDemo: React.FunctionComponent = () => {
    return (<>
        <Demo code={require(`!!raw-loader!./citySelect.example`).default}>
            <h4 style={{marginBottom:12}}>CitySelect是一个web端组件，具有城市定位、根据首字母选择城市的功能。</h4>
            <CitySelectExample/>
        </Demo>
    </>);
};

export default CitySelectDemo;