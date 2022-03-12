import React, {HTMLAttributes, MouseEventHandler, TouchEventHandler, useEffect, useRef, useState} from 'react';
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
    const [barTop, _setBarTop] = useState(0);
    const [barVisible, setBarVisible] = useState(false);
    const setBarTop = (height: number) => {
        if (height < 0) return;
        const innerAllHeight = innerRef.current!.scrollHeight;
        const innerClientHeight = innerRef.current!.getBoundingClientRect().height;
        const barHeight = innerClientHeight * innerClientHeight / innerAllHeight;
        const maxHeight = innerRef.current!.getBoundingClientRect().height - barHeight;
        if (height >= maxHeight) return;
        return _setBarTop(height);
    };
    useEffect(() => {
        const innerAllHeight = innerRef.current!.scrollHeight;
        const innerClientHeight = innerRef.current!.getBoundingClientRect().height;
        setBarHeight(innerClientHeight * innerClientHeight / innerAllHeight);
    }, []);
    const refTimer = useRef<number | null>(null);
    const onScroll = () => {
        const innerAllHeight = innerRef.current!.scrollHeight;
        const innerClientHeight = innerRef.current!.getBoundingClientRect().height;
        const innerScrollHeight = innerRef.current!.scrollTop;
        setBarTop(innerScrollHeight * innerClientHeight / innerAllHeight);
        setBarVisible(true);

        if (refTimer.current !== null) {
            window.clearTimeout(refTimer.current);
        }
        refTimer.current = window.setTimeout(() => {setBarVisible(false);}, 1000);
    };

    const refFirstBarTop = useRef(0);
    const refDragging = useRef(false);
    const refDownY = useRef(0);
    const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
        refDragging.current = true;
        refDownY.current = e.clientY;
        refFirstBarTop.current = barTop;
    };
    const onMouseMove = (e: MouseEvent) => {
        if (refDragging.current) {
            const delta = e.clientY - refDownY.current;
            setBarTop(refFirstBarTop.current + delta);
            const x = innerRef.current!.scrollHeight * (refFirstBarTop.current + delta) / innerRef.current!.getBoundingClientRect().height;
            innerRef.current!.scrollTop = x;
        }
    };
    const onMouseUp = () => {
        refDragging.current = false;
    };

    const onSelect = (e: Event) => {
        refDragging.current && e.preventDefault();
    };
    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('selectstart', onSelect);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('selectstart', onSelect);
        };
    }, []);

    const touchStartRef = useRef(0);
    const onTouchStart: TouchEventHandler = (e) => {
        touchStartRef.current = e.touches[0].clientY;
    };
    const onTouchMove: TouchEventHandler = (e) => {
        const delta = touchStartRef.current - e.touches[0].clientY;
        console.log(delta);
        if (delta < 0) {
            setTranslateY(translateY - delta);
            touchStartRef.current = e.touches[0].clientY;
        }
    };
    const onTouchEnd = () => {setTranslateY(0);};

    const [translateY, setTranslateY] = useState(0);
    return (
        <div className={sc('', className)}
             {...rest}>
            <div
                className={sc('inner')}
                style={{
                    right: -scrollbarWidth(),
                    transform: `translateY(${translateY}px)`
                }}
                ref={innerRef}
                onScroll={onScroll}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {children}
            </div>
            {barVisible &&
            <div className={sc('track')}>
                <div
                    className={sc('bar')}
                    style={{height: barHeight, transform: `translateY(${barTop}px)`}}
                    onMouseDown={onMouseDown}
                />
            </div>
            }
        </div>);

};
export default Scroll;