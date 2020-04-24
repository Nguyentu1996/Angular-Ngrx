import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/layouts/main-layouts.component';


const routes: Routes = [
 {
   path:'',
  component: MainComponent,
  children:[
    {
      path:'home',
      loadChildren:()=> import("./page-features/home/home.module").then(m=>m.HomeModule)
    },
    {
      path:'contact',
      loadChildren:()=> import("./page-features/contact/contact.module").then(m=>m.ContactModule)
    },
    {
      path:'product',
      loadChildren:()=>import('./page-features/products/product.module').then(m=>m.ProductModule)
    },
    {
      path:'',
      redirectTo:'home',pathMatch:'full'
    }
  ]
 },
 {
   path:'' , component:MainComponent,
   children:[
    {
      path:'**',
      loadChildren:()=> import('./page-not-found/page-not-fount.module').then(m=>m.PageNotFoundModule)
    }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
