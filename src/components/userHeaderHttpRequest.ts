import { UserInfo } from "./userInfo";
import ApplicationConfig from "./applicationConfig";

export class UserHeaderHttpRequest extends Request{

    constructor(endpoint: string, userInfo: UserInfo, options: RequestInit = { }){
        let headers = new Headers();
        headers.append("user-email", userInfo.email);
        headers.append("user-name", userInfo.name);

        options.headers = headers;

        super(`${ApplicationConfig.api.staging.baseUrl}${endpoint}`, options);
    }
}