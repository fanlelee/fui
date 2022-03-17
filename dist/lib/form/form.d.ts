import React, { ReactEventHandler, ReactFragment } from 'react';
import './form.scss';
export interface FormData {
    [K: string]: any;
}
interface FormProps {
    value: FormData;
    fields: Array<{
        name: string;
        label: string;
        input: {
            type: string;
        };
    }>;
    buttons: ReactFragment;
    onChange: (value: FormData) => void;
    onSubmit: ReactEventHandler<HTMLFormElement>;
    errors: {
        [K: string]: string[];
    };
    className?: string;
    errorsDisplayMode?: 'first' | 'all';
}
declare const Form: React.FunctionComponent<FormProps>;
export default Form;
