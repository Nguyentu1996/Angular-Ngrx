import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import * as fromSlider from '../../core/components/slider/state';
import * as sliderActions from '../../core/components/slider/state/slider.actions';
import { Store } from '@ngrx/store';
import { Title } from 'src/app/core/components/slider/state/title';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit , OnDestroy {
  // data$ = new BehaviorSubject({count: 0 });
  // _count = 0;
  // count$ : Observable<number>;
  constructor(
    private cd : ChangeDetectorRef,
    private sliderStore : Store<fromSlider.State>
    )
  { 
  }
  ngOnDestroy(): void {
    // this.sliderStore.dispatch(new sliderActions.Animations(false))
  }

  ngOnInit(): void {
    const title: Title={
      h1 : 'If you never try, you never know ',
      p : ''
    }
    this.sliderStore.dispatch(new sliderActions.LoadTitleSlider(title));
    this.sliderStore.dispatch(new sliderActions.Animations(true))

  }
  
}
