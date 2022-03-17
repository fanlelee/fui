import { FormData } from './form';
interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validate?: (value: string, succeed: (reason?: any) => void, fail: (reason?: any) => void) => void;
}
declare type FormRules = Array<FormRule>;
interface FormErrors {
    [K: string]: string[];
}
declare const Validator: (data: FormData, rules: FormRules, callback: (errors: FormErrors) => void) => void;
export default Validator;
