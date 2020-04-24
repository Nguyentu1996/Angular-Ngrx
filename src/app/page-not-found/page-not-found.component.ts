import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromSlider from '../core/components/slider/state';
import * as sliderActions from '../core/components/slider/state/slider.actions';
import { Title } from '../core/components/slider/state/title';
@Component({
    selector: 'app-name',
    template:`
    `,
})
export class PageNotFoundComponent implements OnInit {
    constructor(
        private sliderStore :Store<fromSlider.State>
    ) { }

    ngOnInit(): void { 
        const title : Title  = {
            h1 : 'This is not the page you were looking for!',
            p :''
        }
        this.sliderStore.dispatch(new sliderActions.LoadTitleSlider(title));
        this.sliderStore.dispatch(new sliderActions.Animations(true));
    }
}
