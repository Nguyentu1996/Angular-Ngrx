import { Title } from './title';
import { SliderActions, SliderActionTypes } from './slider.actions';

export interface SliderState {
    title : Title,
    animation : boolean
}
const titl = {
    h1: 'ANGULAR ONE FRAMEWORK ON MOBILE AND DESKTOP',
    p : "write everything you know"
}
const initState : SliderState = {
    title : titl,
    animation : false
}
export function reducer(state = initState, action : SliderActions) : SliderState{
    switch(action.type) {
        case SliderActionTypes.LoadTitleSlider :
            return {
                ...state,
                title : action.payload
            }
        case SliderActionTypes.Animations:
            return {
                ...state,
                animation : action.payload
            }
        default :
        return state;
    }
        
}