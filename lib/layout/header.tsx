import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('layout')

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const {className,...rest} = props
    return (
        <div className={sc('header', props.className)}
             {...rest}
        >
            {props.children}
        </div>
    );
};

export default Header;