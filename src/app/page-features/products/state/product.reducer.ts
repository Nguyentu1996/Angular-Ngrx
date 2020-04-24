import { Product } from '../product';
import { ProductActions,ProductActionTypes } from './product.actions';
// state feature (product)
export interface ProductState{
    showProductCode : boolean;
    currentProductId : number | null;
    products : Product[];
    error : string;

}
const initialState :ProductState = {
    showProductCode :true,
    currentProductId : null,
    products : [],
    error : ''
}
export function reducer(state = initialState , action :ProductActions): ProductState{
    switch(action.type){
        case ProductActionTypes.LoadSuccess :
            return {
                ...state,
                products : action.payload
            };
        case ProductActionTypes.LoadFail :
            return {
                ...state,
                products :[],
                error : action.payload
            };
        case ProductActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProductId:action.payload.id,
            }
        case ProductActionTypes.ClearCurrentProduct:
            return {
                ...state,
                currentProductId:null
            }
        case ProductActionTypes.UpdateProductFail:
            return {
                ...state,
                error : action.payload
            }
        case ProductActionTypes.UpdateProductSuccess:
            const updateProducts = state.products.map(
                item => action.payload.id === item.id ? action.payload : item
            );
            return {
                ...state,
                products : updateProducts,
                currentProductId : action.payload.id,
                error : ''
            };
        default :
        return state;
    }
}