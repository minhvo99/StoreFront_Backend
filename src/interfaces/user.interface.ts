export interface User {
    firstname: string;
    lastname: string;
    username: string;
    password_digest: string;
}
export interface BaseUser extends User {
    id: number;
}