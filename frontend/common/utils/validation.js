import { message } from 'antd';

export class ValidationUtils {
    static validate(value, regex, info) {
        if (regex.test(value)) {
            return;
        }
        message.error(info);
    }
}