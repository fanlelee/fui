import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon'

interface Props{

}

const App:React.FunctionComponent<Props> = ()=>{
    return (
        <Icon name='loading'/>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));