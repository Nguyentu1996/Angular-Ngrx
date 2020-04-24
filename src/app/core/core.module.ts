import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './layouts/main-layouts.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SliderComponent } from './components/slider/slider.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './components/slider/state/slider.reducer';
@NgModule({
    declarations: [MainComponent,HeaderComponent,FooterComponent, SliderComponent],
    imports: [ CommonModule,RouterModule,MatToolbarModule,StoreModule.forFeature('slider',reducer)
    ],
    exports: [],
    providers: [],
})
export class CoreModule {}