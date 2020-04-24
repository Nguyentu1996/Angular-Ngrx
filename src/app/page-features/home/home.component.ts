import { Component, OnInit,EventEmitter, ChangeDetectionStrategy, Output, OnDestroy } from '@angular/core';
import * as fromSlider from '../../core/components/slider/state';
import * as fromHome  from '../home/state';
import * as SliderActions from '../../core/components/slider/state/slider.actions';
import * as HomeActions from '../home/state/home.actions'
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Post } from './posts/post';
import { Posts } from './posts/post-data';
export interface Title {
  h1 : string;
  p : string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit , OnDestroy {
  posts : Post[]=[];
  subcription : Subscription[] = [];
  constructor(
    private store : Store<fromSlider.State>,
    private storeHome : Store<fromHome.State>,


  ) { }
  ngOnDestroy(): void {
    this.subcription.map(ob=>ob.unsubscribe())
  }

  ngOnInit(): void {
    this.store.dispatch(new SliderActions.Animations(false));
    setTimeout(()=>{
     this.store.dispatch(new SliderActions.Animations(true));
    },300);
    this.store.dispatch(new HomeActions.SetPost(Posts) );
    this.store.dispatch(new SliderActions.LoadTitleSlider({
      h1: 'ANGULAR ONE FRAMEWORK ON MOBILE AND DESKTOP',
      p : "write everything you know"
   }));
  
   this.subcription.push(this.storeHome.pipe(select(fromHome.getPost)).subscribe(data=>{
     if(data){
       this.posts = data;
     }
   }));

  }
  
 
}
