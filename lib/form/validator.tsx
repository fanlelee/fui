import {FormData} from './form';

interface FormRule {
    key: string,
    required: boolean,
    minLength?: number,
    maxLength?: number
}

type FormRules = Array<FormRule>


interface FormErrors {
    [K: string]: string[]
}

const Validator = (data: FormData, rules: FormRules): FormErrors => {
    let errors:any = {}
    rules.map((rule) => {
        if (rule.required && (data[rule.key] === undefined || data[rule.key] === null || data[rule.key] === '')) {
             errors[rule.key] = ['必填']
        }
    });

return errors
};

export default Validator;