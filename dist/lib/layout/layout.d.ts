import React, { ReactElement } from 'react';
import './layout.scss';
interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactElement | Array<ReactElement>;
}
declare const Layout: React.FunctionComponent<LayoutProps>;
export default Layout;
export { default as Header } from './header';
export { default as Content } from './content';
export { default as Footer } from './footer';
export { default as Aside } from './aside';
