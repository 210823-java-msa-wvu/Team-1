export interface User {
    id : number;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    is_professional: boolean;
    is_admin: boolean;
    is_suspended: boolean;
    is_flagged: boolean;
    followers: number;
    following: number;

}