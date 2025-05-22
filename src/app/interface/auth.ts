import {HttpErrorResponse} from "@angular/common/http";

export interface Signup {
    email: string;
    password: string;
    name: string;
    phone: string;
    dob: string;
}

export interface Login {
    email?: string;
    phone?: string;
    password: string;
}

export interface VerifyAccount {
    code: string;
}

export interface SignupResponse {
    message: string;
    data: {
        user: {
            id: number;
            name: string;
            email: string;
            role: string;
            isVerified: boolean;
            dob: string;
            phone: string;
        };
        token: string;
    };
}

export interface LoginResponse {
    message: string;
    data: {
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            name: string;
            email: string;
            role: string;
            isVerified: boolean;
            dob: string;
            phone: string;
        };
    };
}

export interface SuccessResponse {
    message: string;
}

export interface AuthState {
    isLoading: boolean;
    data: SignupResponse | LoginResponse | null;
    message: SuccessResponse | null;
    error: HttpErrorResponse | null;
}