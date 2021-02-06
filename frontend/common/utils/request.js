import Axios from "axios";
import { BlogConfig } from "../../blog.config";
import { Logger } from "./logger";
import { Constant } from "../constant";

const axiosInstance = Axios.create({
  withCredentials: true,
  xsrfCookieName: 'csrfToken',
  xsrfHeaderName: 'x-csrf-token',
});

export class Request {
  static __getUrlFromBackend(backendUrl) {
    return `${BlogConfig.backendHost}${backendUrl}`;
  }

  static async get(backendUrl, query) {
    let response = null;
    try {
      response = await axiosInstance.get(Request.__getUrlFromBackend(backendUrl), query);
    } catch (e) {
      Logger.printProduct(Constant.text.loggerTagServer, Constant.text.serverError);
    }
    response = response || {};
    return response.data || null;
  }

  static async post(backendUrl, body) {
    let response = null;
    try {
      response = await axiosInstance.post(Request.__getUrlFromBackend(backendUrl), body);
    } catch (e) {
      Logger.printProduct(Constant.text.loggerTagServer, Constant.text.serverError);
    }
    response = response || {};
    return response.data || null;
  }

  static async delete(backendUrl, body) {
    let response = null;
    try {
      response = await axiosInstance.delete(Request.__getUrlFromBackend(backendUrl), body);
    } catch (e) {
      Logger.printProduct(Constant.text.loggerTagServer, Constant.text.serverError);
    }
    response = response || {};
    return response.data || null;
  }
}
