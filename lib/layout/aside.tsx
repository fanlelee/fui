import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('layout')

interface AsideProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Aside: React.FunctionComponent<AsideProps> = (props) => {
    const {className,...rest} = props
    return (
        <div className={sc('aside', props.className)}
             {...rest}
        >
            {props.children}
        </div>
    );
};

export default Aside;