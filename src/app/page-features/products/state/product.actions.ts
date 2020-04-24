// Ngrx
import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes{
    ToggleProductCode = '[Product] Toggle Product code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct ='[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    Load = '[Product] Load Product',
    LoadSuccess = '[Product] Load Success',
    LoadFail = '[Product] Load Fail',
    UpdateProduct = '[Product] Update Product',
    UpdateProductSuccess = '[Product] Update Product Success',
    UpdateProductFail = '[Product] Update Product Fail',
    CreateProduct = '[Product] Create Product',
    CreateProductSuccess = '[Product] Create Product Success',
    CreateProductFail = '[Product] Create Product Fail',
    DeleteProduct ='[Product] Delete Product',
    DeleteProductFail = '[Product] Delete Product Fail',
    DeleteProductSuccess ='[Product] Delete Product Success'
}
// Create Actions
export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;
    constructor(public payload : boolean){}
}
export class SetCurrentProduct implements Action{
    readonly type = ProductActionTypes.SetCurrentProduct;
    constructor(public payload : Product){}
}
export class ClearCurrentProduct implements Action{
    readonly type = ProductActionTypes.ClearCurrentProduct;
}
export class Load implements Action{
    readonly type = ProductActionTypes.Load;
}
export class LoadSuccess implements Action{
    readonly type = ProductActionTypes.LoadSuccess;
    constructor(public payload : Product[]){}
}
export class LoadFail implements Action{
    readonly type = ProductActionTypes.LoadFail;
    constructor(public payload : string){}
}
export class UpdateProduct implements Action{
    readonly type = ProductActionTypes.UpdateProduct;
    constructor(public payload : Product){}

}
export class UpdateProductSuccess implements Action{
    readonly type = ProductActionTypes.UpdateProductSuccess;
    constructor(public payload : Product){}
}
export class UpdateProductFail implements Action {
    readonly type = ProductActionTypes.UpdateProductFail;
    constructor(public payload : string){}
}
// Union the valid types
export type ProductActions = ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
//   | InitializeCurrentProduct
  | Load
  | LoadSuccess
  | LoadFail
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFail;
//   | CreateProduct
//   | CreateProductSuccess
//   | CreateProductFail
//   | DeleteProduct
//   | DeleteProductSuccess
//   | DeleteProductFail;