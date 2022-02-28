import React, {ReactFragment} from 'react';

interface FormProps {
    value: { [K: string]: any },
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: ReactFragment
}

const Form: React.FunctionComponent<FormProps> = (props) => {
    return (<>
        <form action="">
            {props.fields.map((n, i) =>
                <div key={i}>
                    {n.label}:<input type={n.input.type}/>
                </div>
            )}
            {props.buttons}
        </form>
    </>);
};

export default Form;