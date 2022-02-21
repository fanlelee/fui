import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

interface Props {

}

const App: React.FunctionComponent<Props> = () => {
    const fn: React.MouseEventHandler = (e) => {
        console.log('onClick');
        console.log(((e.target as SVGElement).children[0] as SVGUseElement).href);//断言

    };
    return (
        <Icon className='ss'
            name='loading'
            onClick={fn}
            onMouseEnter={() => console.log('enter')}
            onMouseLeave={() => console.log('leave')}
        />
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));