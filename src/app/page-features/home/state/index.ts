import * as fromRoot from '../../../state/app.state'
import * as fromHome from '../state/home.reducer'
import { createFeatureSelector, createSelector } from '@ngrx/store'

export interface State extends fromRoot.State{
    homeState : fromHome.HomeState
}
const getHomeFeatureState = createFeatureSelector<fromHome.HomeState>('home');
export const getPost = createSelector(
    getHomeFeatureState,
    state => state.posts
)