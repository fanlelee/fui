import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

interface Props {

}

const App: React.FunctionComponent<Props> = () => {
    const fn :React.MouseEventHandler = (e) => {
        console.log(((e.target as SVGElement ).children[0] as SVGUseElement).href);//断言

    };
    return (
        <Icon name='loading' onClick={fn}/>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));