import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductShellComponent } from './container/product-shell/product-shell.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';
import { ProductListComponent } from './components/product-list/product-list.component';
// material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ShareModule } from 'src/app/shared/shared-module';

const routes : Routes =[
    {path:'',component:ProductShellComponent}
];
@NgModule({
    declarations: [ProductShellComponent, ProductListComponent,ProductItemComponent],
    imports: [
        RouterModule.forChild(routes),
        StoreModule.forFeature('products',reducer),
        EffectsModule.forFeature([ProductEffects]),
        ShareModule
    ],
    exports: [],
    providers: [],
    bootstrap:[],
    // entryComponents:[ProductItemComponent]
})
export class ProductModule {}