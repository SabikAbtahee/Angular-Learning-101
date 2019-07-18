import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDefaultComponent } from './components/product-default/product-default.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { Route, Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    component:ProductDefaultComponent
  },
  {
    path:'view',
    component:ProductViewComponent
  }
]

@NgModule({
  declarations: [ProductDefaultComponent,ProductViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
