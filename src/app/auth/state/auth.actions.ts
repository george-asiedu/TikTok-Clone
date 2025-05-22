import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {
    AuthState,
    Login,
    LoginResponse,
    Signup,
    SignupResponse,
    SuccessResponse,
    VerifyAccount
} from "../../interface/auth";
import {HttpErrorResponse} from "@angular/common/http";

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'Signup': props<{user: Signup}>(),
        'SignupSuccess': props<{data: SignupResponse}>(),
        'Login': props<{user: Login}>(),
        'LoginSuccess': props<{data: LoginResponse}>(),
        'Verify Account': props<{code: VerifyAccount}>(),
        'Verify Account Success': props<{message: SuccessResponse}>(),
        'Auth Error': props<{error: HttpErrorResponse}>(),
        'Get Auth Data': props<{data: LoginResponse}>(),
        'Logout': emptyProps()
    }
})