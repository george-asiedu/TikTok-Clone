import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, LoginResponse, SignupResponse } from '../../interface/auth';
import {Tokens} from "../../constants";

export const selectAuthFeature = createFeatureSelector<AuthState>('Auth');

const extractToken = <T extends Tokens>(response: T): string | null =>
    response.token ?? response.accessToken ?? response.refreshToken ?? null;

export const getAuthenticationToken = (state: SignupResponse | LoginResponse): string | null =>
    state.data ? extractToken(state.data) : null;

export const selectIsLoading = createSelector(
    selectAuthFeature,
    (state) => state.isLoading
);

export const selectAuthToken = createSelector(
    selectAuthFeature,
    (state) => state.data ? getAuthenticationToken(state.data) : null
);