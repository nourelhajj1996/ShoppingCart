import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';


const routes: Routes = [
  /* { path: '', redirectTo: 'productsPage', pathMatch: 'full' },
  { path: 'productsPage', component: ProductsPageComponent },
  { path: 'basketPage', component: BasketPageComponent } */ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
