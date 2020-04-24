import { Action } from '@ngrx/store';
import { Post } from '../posts/post';

export enum HomeActionTypes {
    SetPost ="[home] Set Post"
}
export class SetPost implements Action {
    readonly type = HomeActionTypes.SetPost;
    constructor(public payload : Post[]){}
}


export type HomeActions = SetPost;