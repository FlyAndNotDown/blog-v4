import { message } from 'antd';

export class ValidationUtils {
    static validate(value, regex, info) {
        if (regex.test(value)) {
            return true;
        }
        message.error(info);
        return false;
    }
}