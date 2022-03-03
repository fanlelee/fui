import React, {InputHTMLAttributes} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const sc = scopedClassMaker('input');
const Input: React.FunctionComponent<InputProps> = (props) => {
    const {className, ...rest} = props;
    return (
        <input className={sc('',)} {...rest}/>
    );
};

export default Input;