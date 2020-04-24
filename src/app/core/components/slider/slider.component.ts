import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Title } from 'src/app/page-features/home/home.component';
import * as fromSlider from '../slider/state';

import { Store, select } from '@ngrx/store';
import { slide } from 'src/app/shared/animations/slideInSliderTitle';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations:[
    slide
  ]
})
export class SliderComponent implements OnInit , OnDestroy{
 title$ : Observable<Title>;
 _title : Title;
 slide = 'SlideOut';
subscription : Subscription[]=[];
  constructor(
    private store : Store<fromSlider.State>,
    private cd : ChangeDetectorRef

  ) { }
  ngOnDestroy(): void {
    this.subscription.map(ob=>ob.unsubscribe());
  }

  ngOnInit(): void {
  
    this.title$ = this.store.pipe(select(fromSlider.getSliderTitle));
    this.subscription.push(this.title$.subscribe((data :Title)=>{
      if(data){
        this._title = data;
      }
    }));
    this.subscription.push( this.store.pipe(select(fromSlider.getAnimation)).subscribe(data => {
      if(data){
        // setTimeout(()=>{
          this.slide ='SlideIn';
          this.cd.markForCheck();
        // },300)
      }else  this.slide ='SlideOut';

    }));
     
  }

}
