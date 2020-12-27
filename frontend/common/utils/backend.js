import { BlogConfig } from "../../blog.config";

const config = BlogConfig.backend[BlogConfig.env];

export class BackendUtils {
    static getUrl(content) {
        return `${config.url}${content}`;
    }
}