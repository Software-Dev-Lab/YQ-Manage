// src/api/user/type.ts
export interface loginFormData {
    username: string;
    password: string;
}

export interface loginResponseData {
    code: number;
    data: dataType;
}

interface dataType {
    message?: string;
    token?: string;
}

export interface userInfoReponseData {
    code: number;
    data: user;

}

export interface menuListType {
    name: string;
    path: string;
    icon: string;
    menuList?: menuListType[];
}

interface user {
    checkUser: userInfo;
}

interface userInfo {
    userId: number;
    avatar: string;
    username: string;
    password: string;
    desc: string;
    role: string[];
    button: string[];
    routes: string[];
    token: string;
}

