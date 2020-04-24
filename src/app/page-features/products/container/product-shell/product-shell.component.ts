import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../state';
import * as productActions from '../../state/product.actions';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../product';
import * as fromSlider from '../../../../core/components/slider/state';
import * as silderActions from '../../../../core/components/slider/state/slider.actions';
import { Title } from 'src/app/core/components/slider/state/title';

@Component({
  selector: 'app-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductShellComponent implements OnInit , OnDestroy {
  productList$ : Observable<Product[]>;
  errorMessage$ : Observable<string>;
  currentProduct$ :Observable<Product>;
  constructor(
    private store : Store<fromProduct.State>,
    private storeSlider : Store<fromSlider.State>
  ) { 
    
  }

  ngOnInit(): void {
    const title :Title =  {
      h1 : 'HELLO! THIS IS MY PROJECT',
      p : 'now, see what Im doing here'
    }
    this.storeSlider.dispatch(new silderActions.LoadTitleSlider(title));
    this.storeSlider.dispatch(new silderActions.Animations(true));
    this.store.dispatch(new productActions.Load());
    this.productList$ = this.store.pipe(select(fromProduct.getProducts));
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    this.currentProduct$ = this.store.pipe(select(fromProduct.getCurrentProduct));

  }
  editProduct(product:Product){
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }
  clearCurrentProduct(){
    this.store.dispatch(new productActions.ClearCurrentProduct);
  }
  updateProduct(product : Product){
    this.store.dispatch(new productActions.UpdateProduct(product));
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.storeSlider.dispatch(new silderActions.Animations(false))
    
  }
}
