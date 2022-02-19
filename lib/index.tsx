import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

interface Props {

}

const App: React.FunctionComponent<Props> = () => {
    const fn = () => {
        console.log('fn');
    };
    return (
        <Icon name='loading' onClick={fn}/>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));