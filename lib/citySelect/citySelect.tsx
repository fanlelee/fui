import React from 'react';
import './citySelect.scss'


const CitySelect: React.FunctionComponent = (props) => {
    return (<>
        <div>{props.children}</div>
    </>);
};

export default CitySelect;