/**
 * Router
 * @description site router
 * @author John Kindem
 * @since 2020-7-4
 */
export class Router {
    /**
     * jump to destination url
     * @param url destination url
     */
    static jumpTo(url) {
        window.location.href = url;
    }
}