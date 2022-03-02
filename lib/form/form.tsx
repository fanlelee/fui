import React, {ReactEventHandler, ReactFragment} from 'react';

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
}

const Form: React.FunctionComponent<FormProps> = (props) => {
    const onChangeInput = (name: string, value: any) => {
        const newData = {...props.value, [name]: value};
        props.onChange(newData);
    };
    const onSubmitForm: ReactEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    };
    return (<>
        <form action="" onSubmit={onSubmitForm}>
            {props.fields.map((n, i) =>
                <div key={i}>
                    {n.label}:
                    <input
                        type={n.input.type}
                        value={props.value[n.name]}
                        onChange={(e) => {onChangeInput(n.name, e.target.value);}}
                    />
                    {JSON.stringify(props.errors[n.name])}
                </div>
            )}
            {props.buttons}
        </form>
    </>);
};


export default Form;