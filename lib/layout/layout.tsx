import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import Aside from './aside';
import './layout.scss';

const sc = scopedClassMaker('layout');


interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const {className, ...rest} = props;
    const children = props.children as Array<ReactElement>;
    const hasAside = children.length &&
        children.reduce((result, node) => result || node.type === Aside, false);

    const asideClass = hasAside ? 'hasAside' : '';

    return (
        <div className={sc('', [props.className, asideClass])}
             {...rest}
        >
            {props.children}
        </div>
    );
};

export default Layout;