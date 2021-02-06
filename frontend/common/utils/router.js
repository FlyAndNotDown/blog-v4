import { Constant } from '../constant';

export class Router {
  static __jumpTo(url) {
    window.location.href = url;
  }

  static __newWindowTo(url) {
    window.open(url);
  }

  static jumpToPost(id) {
    Router.__jumpTo(`${Constant.route.post}/${id}`);
  }

  static newWindowToPost(id) {
    Router.__newWindowTo(`${Constant.route.post}/${id}`);
  }

  static jumpToTag(id) {
    Router.__jumpTo(`${Constant.route.tag}/${id}`);
  }

  static newWindowToTag(id) {
    Router.__newWindowTo(`${Constant.route.tag}/${id}`);
  }
}
