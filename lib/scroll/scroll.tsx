import React, {HTMLAttributes} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './scroll.scss'

interface ScrollProps extends HTMLAttributes<HTMLDivElement>{
}

const sc = scopedClassMaker('scroll');

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {

    const {className, children, ...rest} = props;
    return (<div className={sc('', className)} {...rest}>
        <div className={sc('inner')}>
            {children}
        </div>
    </div>);

};
export default Scroll;