import * as React from 'react';
import {ButtonHTMLAttributes} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './button.scss';
import Icon from '../icon/icon';

const sc = scopedClassMaker('button');

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    level?: 'important' | 'danger' | 'normal',
    icon?: { name: string, location?: 'left' | 'right' }
}

const Button: React.FunctionComponent<Props> = (props) => {
        const {className, children, icon, level, ...rest} = props;

        return (
            <button className={
                sc({'': true, [level!]: true}, className)
            }
                    {...rest}>
                {icon ?
                    (
                        (icon.location === 'left' && <><Icon name={icon.name} className={sc('left-icon')}/>{children}</>) ||
                        (icon.location === 'right' && <>{children}<Icon name={icon.name} className={sc('right-icon')}/></>)||
                        (!icon.location && <>{children}<Icon name={icon.name}/></>)
                    ) : children}
            </button>
        );
    }
;

Button.defaultProps =
    {
        level: 'normal'
    }
;

export default Button;