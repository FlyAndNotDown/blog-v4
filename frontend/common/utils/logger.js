import { BlogConfig } from '../../blog.config';

/**
 * Logger
 * @description log printer
 * @author John Kindem
 * @since 2020-7-4
 */
export class Logger {
    /**
     * print debug log, only has effects when dev mode is open
     * @param tag tag
     * @param info info
     */
    static printDebug(tag, info) {
        if (!BlogConfig.debugMode) {
            return;
        }
        Logger.__printWithFormat(tag, info);
    }

    /**
     * print product log, has effects anytime
     * @param tag tag
     * @param info info
     */
    static printProduct(tag, info) {
        Logger.__printWithFormat(tag, info);
    }

    /**
     * print log with format
     * @private
     * @param tag tag
     * @param info info
     */
    static __printWithFormat(tag, info) {
        console.log(`[${tag}]`, info);
    }
}
