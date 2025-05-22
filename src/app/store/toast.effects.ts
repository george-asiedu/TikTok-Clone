import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {NgToastService} from "ng-angular-popup";
import {authActions} from "../auth/state/auth.actions";
import {tap} from "rxjs";
import {toastMessages} from "../constants";

export const signupNotification = createEffect(
    (actions$ = inject(Actions), toast = inject(NgToastService)) => {
        return actions$.pipe(
            ofType(authActions.signupSuccess),
            tap((message) =>
                toast.success(
                    toastMessages.signupMessage,
                    message.data.message,
                    toastMessages.toastDuration
                )
            )
        );
    }, {dispatch: false, functional: true}
);

export const verifyAccountNotification = createEffect(
    (actions$ = inject(Actions), toast = inject(NgToastService)) => {
        return actions$.pipe(
            ofType(authActions.verifyAccountSuccess),
            tap((message) =>
                toast.success(
                    toastMessages.verifyAccountMessage,
                    message.message.message,
                    toastMessages.toastDuration
                )
            )
        );
    }, {dispatch: false, functional: true}
);

export const loginNotification = createEffect(
    (actions$ = inject(Actions), toast = inject(NgToastService)) => {
        return actions$.pipe(
            ofType(authActions.loginSuccess),
            tap((message) =>
                toast.success(
                    toastMessages.loginMessage,
                    message.data.message,
                    toastMessages.toastDuration
                )
            )
        );
    }, {dispatch: false, functional: true}
);

export const errorNotification = createEffect(
    (actions$ = inject(Actions), toast = inject(NgToastService)) => {
        return actions$.pipe(
            ofType(authActions.authError),
            tap((message) =>
                toast.success(
                    toastMessages.errorMessage,
                    message.error.message,
                    toastMessages.toastDuration
                )
            )
        );
    }, {dispatch: false, functional: true}
);