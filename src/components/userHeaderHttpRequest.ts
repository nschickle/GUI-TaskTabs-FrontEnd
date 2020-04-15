import { UserInfo } from "./userInfo";
import ApplicationConfig from "./applicationConfig";

export class UserHeaderHttpRequest extends Request {

    constructor(endpoint: string, userInfo: UserInfo, additionalHeaders: any = { }) {
        let headers = new Headers();
        headers.append("user-email", userInfo.email);
        headers.append("user-name", userInfo.name);

        const keys = Object.keys(additionalHeaders);
        
        for (const header of keys) {
            headers.append(header, additionalHeaders[header])
        }

        super(`${ApplicationConfig.api.staging.baseUrl}${endpoint}`, { headers });
    }
}