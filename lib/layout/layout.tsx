import React from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './lauout.scss'

const sc = scopedClassMaker('layout');


interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const {className,...rest} = props
    return (
        <div className={sc('', props.className)}
             {...rest}
        >
            {props.children}
        </div>
    );
};

export default Layout;