import { OuterSiteRequest } from './outer-site-request';
import { Logger } from './logger';
import { Constant } from '../constant';
import { BlogConfig } from "../../blog.config";

export class BaiduSpiderUrlPoster {
  static async postUrl(url) {
    if (BlogConfig.debugMode) {
      return;
    }

    let response = null;
    try {
      response = await OuterSiteRequest.post(Constant.route.baiduSpiderService, url)
    } catch (e) {
      Logger.printProduct(Constant.text.loggerTagServer, Constant.text.serverError);
    }
    const data = response.data || {};
    const postedUrl = data.success || 0;
    if (postedUrl > 0) {
      Logger.printProduct(Constant.text.loggerTagCommon, `posted url to baidu spider service: ${url}`);
    } else {
      Logger.printProduct(Constant.text.loggerTagCommon, `failed to post url to baidu spider service: ${url}`);
    }
  }
}
