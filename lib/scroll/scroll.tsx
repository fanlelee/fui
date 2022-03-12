import React, {HTMLAttributes, MouseEventHandler, TouchEventHandler, useEffect, useRef, useState} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';
import Icon from '../icon/icon';

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
    const [translateY, _setTranslateY] = useState(0);
    const setTranslateY = (y: number) => {
        if (y < 0) {y = 0;} else if (y > 150) {y = 150;}
        _setTranslateY(y);
    };
    const touchStartRef = useRef(0);
    const pullingRef = useRef(false);
    const pullingCountRef = useRef(0);
    const onTouchStart: TouchEventHandler = (e) => {
        if (innerRef.current!.scrollTop !== 0) return;
        pullingRef.current = true;
        touchStartRef.current = e.touches[0].clientY;
        pullingCountRef.current = 0;
    };
    const onTouchMove: TouchEventHandler = (e) => {
        const delta = e.touches[0].clientY - touchStartRef.current;
        pullingCountRef.current += 1;
        if (pullingCountRef.current === 1 && delta < 0) {
            pullingRef.current = false;
            return;
        }
        if (!pullingRef.current) return;

        setTranslateY(translateY + delta);
        touchStartRef.current = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
        if (pullingRef.current) {
            setTranslateY(0);
            pullingRef.current = false;
        }
    };

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
            <div
                className={sc('pulling')}
                style={{height: translateY}}>
                {translateY === 150 ?
                    <span>松开更新</span> :
                    <Icon name='loading'/>}
            </div>
        </div>);

};
export default Scroll;