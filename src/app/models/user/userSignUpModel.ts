export class UserSignupModel {
    public email: string;
    public password: string;
    public confirmPassword: string;
    public message?: string;
    public expiresIn?: number;
    public token?: string;
    public isAdmin?: boolean;
}
