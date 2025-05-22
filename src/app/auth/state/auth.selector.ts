import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from '../../interface/auth';

export const selectAuthFeature = createFeatureSelector<AuthState>('Auth')

export const getSignupToken = (state: AuthState): string | null => {
    if (state.data?.data.token) {
        return state.data.data.token;
    }
    return null;
}
export const selectIsLoading = createSelector(
    selectAuthFeature,
    (state) => state.isLoading
);
export const selectSignupToken = createSelector(selectAuthFeature, getSignupToken);