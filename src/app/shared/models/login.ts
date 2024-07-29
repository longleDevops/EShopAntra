export interface Login {
    username:string;
    password:string
}

export interface LoginResponse {
    username: string;
    jwtToken:string;
    expiresIn:number;
}