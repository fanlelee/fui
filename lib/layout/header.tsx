import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('layout')

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
    const {className,...rest} = props
    return (
        <div className={sc('header', props.className)}
             {...rest}
        >
            {props.children}
        </div>
    );
};

export default Footer;