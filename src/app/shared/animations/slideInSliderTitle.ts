import { trigger, state, style, transition, animate } from '@angular/animations';

export enum States {
    slideIn = 'SlideIn',
    slideOut = 'SlideOut'
}
export const slide = trigger('slide',[
    state(States.slideIn,style({transform:'translateY(0)'})),
    state(States.slideOut,style({transform:'translateY(100%)',opacity:0})),
    transition(`${States.slideOut}=>${States.slideIn}`,animate('400ms ease-in')),
    transition(`${States.slideIn}=>${States.slideOut}`,style({opacity: 0}))
])