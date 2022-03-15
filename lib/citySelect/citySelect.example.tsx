import React from 'react';
import CitySelect from './citySelect';

import cityList from './cityList';
const CitySelectExample: React.FunctionComponent = () => {
    return (<>
        <CitySelect cityList = {cityList}>选择城市</CitySelect>
    </>);
};

export default CitySelectExample;