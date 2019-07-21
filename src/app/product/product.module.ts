import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDefaultComponent } from './components/product-default/product-default.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { Route, Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../root/admin.guard';
const routes:Routes=[
  {
    path:'',
    component:ProductDefaultComponent,
    // canActivate:[AdminGuard],

  },
  {
    path:'view',
    component:ProductViewComponent,
    // canActivate:[AdminGuard],

  }
]

@NgModule({
  declarations: [ProductDefaultComponent,ProductViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ]
})
export class ProductModule { }
