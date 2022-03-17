import React, { HTMLAttributes } from 'react';
import './scroll.scss';
interface ScrollProps extends HTMLAttributes<HTMLDivElement> {
    onPull?: () => void;
}
declare const Scroll: React.FunctionComponent<ScrollProps>;
export default Scroll;
