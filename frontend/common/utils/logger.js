import { BlogConfig } from '../../blog.config';

export class Logger {
    static printDebug(tag, info) {
        if (!BlogConfig.debugMode) {
            return;
        }
        Logger.printWithFormat(tag, info);
    }

    static printProduct(tag, info) {
        Logger.printWithFormat(tag, info);
    }

    static printWithFormat(tag, info) {
        console.log(`[${tag}]`, info);
    }
}
