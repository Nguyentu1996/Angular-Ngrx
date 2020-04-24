import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import{tap, catchError, map}from 'rxjs/operators'
import { throwError } from 'rxjs';
@Injectable({
    providedIn: 'root',
 })
export class ProductService {
    private productsUrl = 'api/products';
    constructor(private _http : HttpClient){}
    getProduct(){
        return this._http.get<Product[]>(this.productsUrl).pipe(
            tap(data=> console.log(JSON.stringify(data))),
            catchError(this.errorHandle)
        );
    }
    createProduct(product:Product){
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        const newProduct ={
            ...product,
            id:null
        };
        return this._http.post<Product>(this.productsUrl,newProduct,{headers}).pipe(
            tap(data=>console.log("create product",JSON.stringify(data))),
            catchError(this.errorHandle)
        );
    }
    deleteProduct(id:number){
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        const url = `${this.productsUrl}/${id}`;
        return this._http.delete<Product>(url,{headers}).pipe(
            tap(data=>console.log("delete Product",JSON.stringify(data))),
            catchError(this.errorHandle)
        );
    }
    updateProduct(product:Product){
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        const url = `${this.productsUrl}/${product.id}`;
        return this._http.put<Product>(url,product,{headers}).pipe(
            tap(() => console.log("Update Product",product.id)),
            map(()=> product),
            catchError(this.errorHandle)
        );
    }
    private errorHandle(err){
       let errorMessage : string;
       if(err.error instanceof ErrorEvent){
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred :${err.error.message}`
       }else{
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
       }
       console.log(err)
       return throwError(errorMessage);

    }

}
