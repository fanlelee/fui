import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

interface ScrollProps {
    className?: string
}

const sc = scopedClassMaker('scroll');

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {

    const {className, children, ...rest} = props;
    return (<div className={sc('', className)} {...rest}>
        {children}
    </div>);

};
export default Scroll;