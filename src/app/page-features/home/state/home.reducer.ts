import { HomeActions, HomeActionTypes } from './home.actions';
import { Post } from '../posts/post';

export interface HomeState {
    posts : Post[];
}
const initState :HomeState = {
    posts : []
}
export function reducer(state = initState,action: HomeActions ) : HomeState{
 switch(action.type){
     case HomeActionTypes.SetPost :
     return {
         ...state,
         posts : action.payload
     };
     default :
     return state
 }
}