import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {authActions} from './auth.actions';
import {filter, switchMap, withLatestFrom} from 'rxjs';
import {mapResponse} from '@ngrx/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AuthState} from '../../interface/auth';
import {selectAuthToken} from './auth.selector';

export const signupUser = createEffect(
    (actions$ = inject(Actions),
     authService = inject(AuthService)) => {
        return actions$.pipe(
            ofType(authActions.signup),
            switchMap(({user}) =>
                authService.signup(user).pipe(
                    mapResponse({
                        next: (response) => authActions.signupSuccess({data: response}),
                        error: (error: HttpErrorResponse) => authActions.authError({error})
                    })
                )
            )
        );
    }, {functional: true, dispatch: true}
);

export const loginUser = createEffect(
    (actions$ = inject(Actions),
     authService = inject(AuthService)) => {
        return actions$.pipe(
            ofType(authActions.login),
            switchMap(({user}) =>
                authService.login(user).pipe(
                    mapResponse({
                        next: (response) => authActions.loginSuccess({data: response}),
                        error: (error: HttpErrorResponse) => authActions.authError({error})
                    })
                )
            )
        )
    }, {functional: true, dispatch: true}
);

export const verifyUserAccount = createEffect(
    (actions$ = inject(Actions),
     authService = inject(AuthService),
     store = inject(Store<AuthState>)
    ) => {
        return actions$.pipe(
            ofType(authActions.verifyAccount),
            withLatestFrom(store.select(selectAuthToken)),
            filter(([, token]) => !!token),
            switchMap(([{code}, token]) =>
                authService.verifyAccount(code, token as string).pipe(
                    mapResponse({
                        next: (response) => authActions.verifyAccountSuccess({message: response}),
                        error: (error: HttpErrorResponse) => authActions.authError({error})
                    })
                )
            )
        )
    }, {functional: true, dispatch: true}
);