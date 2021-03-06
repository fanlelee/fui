import React, {ReactEventHandler, ReactFragment} from 'react';
import Input from '../input/input';
import {scopedClassMaker} from '../helpers/classes';
import './form.scss';

const sc = scopedClassMaker('form');

export interface FormData {
    [K: string]: any
}

interface FormProps {
    value: FormData,
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: ReactFragment
    onChange: (value: FormData) => void
    onSubmit: ReactEventHandler<HTMLFormElement>
    errors: { [K: string]: string[] }
    className?: string
    errorsDisplayMode?: 'first' | 'all';
}

const Form: React.FunctionComponent<FormProps> = (props) => {
    const {className, ...rest} = props;
    const onChangeInput = (name: string, value: any) => {
        const newData = {...rest.value, [name]: value};
        rest.onChange(newData);
    };
    const onSubmitForm: ReactEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        rest.onSubmit(e);
    };
    return (<>
        <form action="" onSubmit={onSubmitForm} className={sc('', className)}>
            <table className={sc('table')}>
                <tbody>
                {rest.fields.map((n, i) =>
                    <tr key={i} className={sc('tr')}>
                        <td className={sc('td')}>
                            <span className={sc('label')}>{n.label}</span>
                        </td>
                        <td className={sc('td')}>
                            <Input
                                className={sc('input')}
                                type={n.input.type}
                                value={rest.value[n.name]}
                                onChange={(e) => {onChangeInput(n.name, e.target.value);}}
                            />
                            <div className={sc('error')}>
                                {rest.errors[n.name] ?
                                    (rest.errorsDisplayMode === 'first' ?
                                        rest.errors[n.name][0] :
                                        rest.errors[n.name].join('???')) :
                                    <span>&nbsp;</span>}
                            </div>
                        </td>
                    </tr>
                )}
                <tr className={sc('tr')}>
                    <td className={sc('td')}/>
                    <td className={sc('td')}>{rest.buttons}</td>
                </tr>
                </tbody>
            </table>

        </form>
    </>);
};
Form.defaultProps = {
    errorsDisplayMode: 'first',
};


export default Form;