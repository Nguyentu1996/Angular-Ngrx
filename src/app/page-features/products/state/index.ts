import * as fromRoot from '../../../state/app.state'
import * as fromProduct from '../state/product.reducer'
import { createFeatureSelector, createReducer, createSelector } from '@ngrx/store'

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends fromRoot.State{
    products : fromProduct.ProductState
}

// Selector funtions
const getProductFeaturesState = createFeatureSelector<fromProduct.ProductState>('products');
export const getProducts = createSelector( 
    getProductFeaturesState,
    state => state.products
)
export const getError = createSelector(
    getProductFeaturesState,
    state => state.error
)
export const getCurrentProductId = createSelector(
    getProductFeaturesState,
    state => state.currentProductId
);
export const getCurrentProduct = createSelector(
    getProductFeaturesState,
    getCurrentProductId,
    (state,currentProductId)=>{
        if(currentProductId){
            return  state.products.find(p => p.id === currentProductId);
        }else return null;
    }
)
