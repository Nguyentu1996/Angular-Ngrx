import { Action } from '@ngrx/store';
import { Title } from './title';

export enum SliderActionTypes {
    LoadTitleSlider = '[Slider] Load Title',
    Animations ='[Slider] Animation',
    ResetStateAnimation = '[Slider] Reset State Animation'
}
export class LoadTitleSlider implements Action{
    readonly type = SliderActionTypes.LoadTitleSlider;
    constructor(public payload : Title){}
}
export class Animations implements Action{
    readonly type = SliderActionTypes.Animations;
    constructor(public payload : boolean){}
}
export class ResetStateAnimation implements Action {
    readonly type = SliderActionTypes.ResetStateAnimation;
    // constructor(public pa)
}
export type SliderActions = LoadTitleSlider | Animations;