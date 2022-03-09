import React, {HTMLAttributes} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './scroll.scss'
import scrollbarWidth from './scrollbar-width';

interface ScrollProps extends HTMLAttributes<HTMLDivElement>{
}

const sc = scopedClassMaker('scroll');

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {

    const {className, children, ...rest} = props;
    return (<div className={sc('', className)} {...rest} >
        <div className={sc('inner')} style={{right:-scrollbarWidth()}}>
            {children}
        </div>
    </div>);

};
export default Scroll;