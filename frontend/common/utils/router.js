import { Constant } from '../constant';

export class Router {
  static jumpTo(url) {
    window.location.href = url;
  }

  static jumpToHome() {
    window.location.href = Constant.route.index;
  }

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
