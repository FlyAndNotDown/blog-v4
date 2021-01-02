/**
 * Router
 * @description site router
 * @author John Kindem
 * @since 2020-7-4
 */
import { Constant } from '../constant';

export class Router {
    /**
     * jump to destination url
     * @param url destination url
     */
    static jumpTo(url) {
        window.location.href = url;
    }

    /**
     * jump to post page with specific id
     *
     * @param id id of post
     */
    static jumpToPost(id) {
        Router.jumpTo(`${Constant.route.post}/${id}`);
    }

    static jumpToLogin() {
        Router.jumpTo(Constant.route.login);
    }

    static jumpToTag(id) {
        Router.jumpTo(`${Constant.route.tag}/${id}`);
    }
}