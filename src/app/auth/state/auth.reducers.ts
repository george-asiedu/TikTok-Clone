import {createFeature, createReducer, on} from '@ngrx/store';
import {initialState} from '../../constants';
import {authActions} from "./auth.actions";
import {state} from "@angular/animations";

export const authFeature= createFeature({
    name: 'Auth',
    reducer: createReducer(
        initialState,
        on(authActions.signup, (state) => ({
            ...state,
            loading: true,
        })),
        on(authActions.login, (state) => ({
            ...state,
            loading: true,
        })),
        on(authActions.verifyAccount, (state) => ({
            ...state,
            loading: true,
        })),
        on(authActions.signupSuccess, (state, {data}) => ({
            ...state,
            loading: false,
            data
        })),
        on(authActions.loginSuccess, (state, {data}) => ({
            ...state,
            loading: false,
            data
        })),
        on(authActions.verifyAccountSuccess, (state, {message}) => ({
            ...state,
            loading: false,
            message
        })),
        on(authActions.authError, (state, {error}) => ({
            ...state,
            loading: false,
            error
        })),
        on(authActions.getAuthData, (state, {data}) => ({
            ...state,
            data
        })),
        on(authActions.logout, (state) => ({
            ...state,
            loading: false,
            data: null
        }))
    )
});