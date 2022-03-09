import React, {HTMLAttributes, useEffect, useRef, useState} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './scroll.scss'
import scrollbarWidth from './scrollbar-width';

interface ScrollProps extends HTMLAttributes<HTMLDivElement>{
}

const sc = scopedClassMaker('scroll');

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {className, children, ...rest} = props;

    const innerRef = useRef<HTMLDivElement>(null)
    const [barHeight,setBarHeight] = useState(0)
    useEffect(()=>{
        const innerAllHeight:number = innerRef.current!.scrollHeight
        const innerClientHeight = innerRef.current!.getBoundingClientRect().height
        setBarHeight(innerClientHeight*innerClientHeight/innerAllHeight)
    },[])
    return (<div className={sc('', className)} {...rest} >
        <div
            className={sc('inner')}
            style={{right:-scrollbarWidth()}}
            ref={innerRef}
        >
            {children}
        </div>
        <div className={sc('track')}>
            <div
                className={sc('bar')}
                style={{height:barHeight}}
            />
        </div>
    </div>);

};
export default Scroll;