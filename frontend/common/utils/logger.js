import { BlogConfig } from '../../blog.config';

export class Logger {
  static printDebug(tag, info) {
    if (!BlogConfig.debugMode) {
      return;
    }
    Logger.__printWithTag(tag, info);
  }

  static printProduct(tag, info) {
    Logger.__printWithTag(tag, info);
  }

  static __printWithTag(tag, info) {
    console.log(`[${tag}]`, info);
  }
}
