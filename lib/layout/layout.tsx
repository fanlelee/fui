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
    const hasAside = length in children &&
        children.reduce((result, node) => result || node.type === Aside, false);

    return (
        <div className={sc({'': true, hasAside}, props.className)}
             {...rest}
        >
            {props.children}
        </div>
    );
};

export default Layout;
export {default as Header} from './header'
export {default as Content} from './content'
export {default as Footer} from './footer'
export {default as Aside} from './aside'