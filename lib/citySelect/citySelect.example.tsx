import React, { useState} from 'react';
import CitySelect from './citySelect';

import cityList from './cityList';
const CitySelectExample: React.FunctionComponent = () => {
    const [city,setCity] = useState('选择城市')
    const onChoose = (chosen:string)=>{
        setCity(chosen)
    }
    return (<>
        <CitySelect cityList = {cityList} onChoose={onChoose}>{city}</CitySelect>
    </>);
};

export default CitySelectExample;