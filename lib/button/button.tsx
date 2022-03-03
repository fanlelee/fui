import * as React from 'react';
import {ButtonHTMLAttributes} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './button.scss';

const sc = scopedClassMaker('button');

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    level?: 'important' | 'danger' | 'normal'
}

const Button: React.FunctionComponent<Props> = (props) => {
    const {className, children, level, ...rest} = props;
    return (
        <button className={
            sc({'': true, [level!]: true}, className)
        }
                {...rest}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    level: 'normal'
};

export default Button;