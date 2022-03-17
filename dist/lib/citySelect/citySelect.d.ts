import React from 'react';
import './citySelect.scss';
interface CitySelectProps {
    cityList: string[];
    onChoose: (K: string) => void;
}
declare const CitySelect: React.FunctionComponent<CitySelectProps>;
export default CitySelect;
