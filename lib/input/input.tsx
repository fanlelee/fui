import React from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './input.scss';
import Icon from '../icon/icon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    icon?: InputIconProps
    maxlength?: number
    onInputChange?: (newValue:string) => void
    value?: string
}

interface InputIconProps {
    name: string
    location?: 'left' | 'right',
}

const sc = scopedClassMaker('input');
const Input: React.FunctionComponent<InputProps> = (props) => {
    const {className, icon, onInputChange, value, ...rest} = props;
    // const [innerValue,setInnerValue] = useState(value||'')
    const iconInputNode = (name: string, location?: 'left' | 'right') => {
        return <>
            {
                (location === 'left' &&
                    <>
                        <span className={sc({'icon': true, 'icon-left': true})}><Icon name={name}/></span>
                        <input className={sc('inner')} {...rest}/>
                    </>) ||
                (location === 'right' &&
                    <>
                        <input className={sc('inner')} {...rest}/>
                        <span className={sc({'icon': true, 'icon-right': true})}><Icon name={name}/></span>
                    </>)
            }
        </>;
    };
    const onInnerInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onInputChange && onInputChange(e.target.value);
    };
    return <div className={sc({'':true,'only':!icon}, className)}>
        {icon ?
            iconInputNode(icon.name, icon.location)
            : <input onChange={onInnerInputChange} value={value} className={sc('inner')} {...rest}/>
        }
    </div>;
};


export default Input;