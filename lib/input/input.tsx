import React from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './input.scss';
import Icon from '../icon/icon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: InputIconProps
    maxlength?: number
    onInputChange?: (newValue: string) => void
    value?: string
    status?: 'warning' | 'error' | 'ok'
}

interface InputIconProps {
    name: string
    location?: 'left' | 'right',
}

const sc = scopedClassMaker('input');
const Input: React.FunctionComponent<InputProps> = (props) => {
    const {className, icon, onInputChange, value, children, status, ...rest} = props;
    const iconInputNode = (name: string, location?: 'left' | 'right') => {
        return <>
            {
                (location === 'left' &&
                    <>
                        <span className={sc({'icon': true, 'icon-left': true})}><Icon name={name}/></span>
                        <InnerInput/>
                    </>) ||
                (location === 'right' &&
                    <>
                        <InnerInput/>
                        <span className={sc({'icon': true, 'icon-right': true})}><Icon name={name}/></span>
                    </>)
            }
        </>;
    };
    const onInnerInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onInputChange && onInputChange(e.target.value);
    };
    const InnerInput = () => {
        return <>
            <input onChange={onInnerInputChange} value={value} className={sc('inner')} {...rest}/>
            {status &&
            <span className={sc({'icon': true, 'icon-right': true, 'icon-status': true})}><Icon name={status}/></span>
            }
        </>;
    };
    return <div className={sc('container')}>

        {children}
        <div className={sc({
            '': true,
            'only': !icon,
            'error': status === 'error',
            'warning': status === 'warning',
            'ok': status === 'ok',
        }, className)}>
            {icon ?
                iconInputNode(icon.name, icon.location)
                : <InnerInput/>
            }
        </div>
    </div>;
};


export default Input;