import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {authActions} from '../auth/state/auth.actions';
import {tap} from 'rxjs';
import {authRoutes, pagesRoutes} from '../constants';

export const signupRoute = createEffect(
    (actions$ = inject(Actions), route = inject(Router)) => {
        return actions$.pipe(
            ofType(authActions.signupSuccess),
            tap(() => route.navigateByUrl(authRoutes.verifyAccount))
        );
    }, {dispatch: false, functional: true}
);

export const verifyAccountRoute = createEffect(
    (actions$ = inject(Actions), route = inject(Router)) => {
        return actions$.pipe(
            ofType(authActions.verifyAccountSuccess),
            tap(() => route.navigateByUrl(authRoutes.login))
        );
    }, {dispatch: false, functional: true}
)

export const LoginRoute = createEffect(
    (actions$ = inject(Actions), route = inject(Router)) => {
        return actions$.pipe(
            ofType(authActions.loginSuccess),
            tap(() => route.navigateByUrl(pagesRoutes.forYou))
        );
    }, {dispatch: false, functional: true}
);

export const logoutRoute = createEffect(
    (actions$ = inject(Actions), route = inject(Router)) => {
        return actions$.pipe(
            ofType(authActions.logout),
            tap(() => route.navigateByUrl(pagesRoutes.forYou))
        );
    }, {dispatch: false, functional: true}
)