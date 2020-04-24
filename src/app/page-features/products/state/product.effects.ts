import { Injectable } from '@angular/core';

import { ProductService } from '../product.service';
import * as productActions from './product.actions';
import {Actions,createEffect, ofType, Effect} from '@ngrx/effects'
import { mergeMap, catchError,map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Product } from '../product';

@Injectable()
export class ProductEffects {
    constructor(
        private _productService: ProductService,
        private _action$ :Actions
    ){}
    
    loadProduct$ = createEffect(()=> 
    this._action$.pipe(
        ofType(productActions.ProductActionTypes.Load),
        mergeMap(action => 
            this._productService.getProduct().pipe(
                map(products =>  (new productActions.LoadSuccess(products))),
                catchError(err => of (new productActions.LoadFail(err)))
            )
        )
    ));
    updateProduct$ = createEffect(()=>
    this._action$.pipe(
        ofType(productActions.ProductActionTypes.UpdateProduct),
        map((action : productActions.UpdateProduct) => action.payload),
        mergeMap((product : Product) => 
        this._productService.updateProduct(product).pipe(
            map(updateProduct => (new productActions.UpdateProductSuccess(updateProduct))),
            catchError(err => of(new productActions.UpdateProductFail(err)))
        ))
    )
    )
}