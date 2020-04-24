import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromSlider from '../state/slider.reducer';
import * as fromRoot from '../../../../state/app.state'
export interface State extends fromRoot.State{
    title : fromSlider.SliderState,
}
const getSliderFeatures = createFeatureSelector<fromSlider.SliderState>('slider');
export const getSliderTitle = createSelector(
    getSliderFeatures,
    state => state.title
)
export const getAnimation = createSelector(
    getSliderFeatures,
    state => state.animation
)