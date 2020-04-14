//holds the user info that will be passed into each request
export class UserInfo{

    public email: string;
    public name: string;

    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}