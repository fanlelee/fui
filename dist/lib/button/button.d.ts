import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import './button.scss';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    level?: 'important' | 'danger' | 'normal';
}
declare const Button: React.FunctionComponent<Props>;
export default Button;
