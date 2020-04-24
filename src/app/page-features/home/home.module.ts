import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/home.reducer';


@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule,HomeRoutingModule,StoreModule.forFeature('home',reducer),
],
    exports: [],
    providers: [],
})
export class HomeModule {}