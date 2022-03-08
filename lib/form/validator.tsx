import {FormData} from './form';

interface FormRule {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    pattern?: RegExp,
    validate?: (value: string, succeed: (reason?: any) => void, fail: (reason?: any) => void) => void
}

type FormRules = Array<FormRule>


interface FormErrors {
    [K: string]: string[]
}

const isEmpty = (value: any) => {
    return value === undefined || value === null || value === '';
};

const Validator = (data: FormData, rules: FormRules, callback: (errors: FormErrors) => void) => {
    let errors: any = {};
    let promiseList: Promise<void>[] = [];
    const addError = (k: string, error: string) => {
        if (isEmpty(errors[k])) {
            errors[k] = [];
        }
        errors[k].push(error);
    };
    rules.map((rule) => {
        if (rule.required && isEmpty(data[rule.key])) {
            addError(rule.key, '必填');
        }
        if ((rule.minLength) &&
            !isEmpty(data[rule.key]) &&
            data[rule.key].length <= rule.minLength) {
            addError(rule.key, '太短了');
        }

        if ((rule.maxLength) &&
            !isEmpty(data[rule.key]) &&
            data[rule.key].length >= rule.maxLength) {
            addError(rule.key, '太长了');
        }
        if (rule.pattern && !rule.pattern.test(data[rule.key])) {
            addError(rule.key, '格式不对');
        }

        if (rule.validate) {
            const after = new Promise<void>(
                (resolve, reject) => rule.validate!(data[rule.key], resolve, reject))
                .then(undefined, (fail) => {
                    fail && addError(rule.key, fail);
                });
            promiseList.push(after);
        }
    });


    Promise.all(promiseList).then(() => {
        callback(errors);
    });
};


export default Validator;