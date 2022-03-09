import React, {HTMLAttributes, useEffect, useRef, useState} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';

interface ScrollProps extends HTMLAttributes<HTMLDivElement> {
}

const sc = scopedClassMaker('scroll');

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {className, children, ...rest} = props;

    const innerRef = useRef<HTMLDivElement>(null);
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, setBarTop] = useState(0);
    useEffect(() => {
        const innerAllHeight = innerRef.current!.scrollHeight;
        const innerClientHeight = innerRef.current!.getBoundingClientRect().height;
        setBarHeight(innerClientHeight * innerClientHeight / innerAllHeight);
    }, []);

    const onScroll = () => {
        const innerAllHeight = innerRef.current!.scrollHeight;
        const innerClientHeight = innerRef.current!.getBoundingClientRect().height;
        const innerScrollHeight = innerRef.current!.scrollTop;
        setBarTop(innerScrollHeight * innerClientHeight / innerAllHeight);
    };
    return (<div className={sc('', className)} {...rest} >
        <div
            className={sc('inner')}
            style={{right: -scrollbarWidth()}}
            ref={innerRef}
            onScroll={onScroll}
        >
            {children}
        </div>
        <div className={sc('track')}>
            <div
                className={sc('bar')}
                style={{height: barHeight, transform: `translateY(${barTop}px)`}}
            />
        </div>
    </div>);

};
export default Scroll;