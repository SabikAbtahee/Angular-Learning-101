import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootSecondComponent } from './components/root-second/root-second.component';
import { RootThirdComponent } from './components/root-third/root-third.component';
// import { routes } from './routes';

const routes: Routes = [
    
  {
    path:'sign-in',
    component:RootSecondComponent
  },
  {
    path:'sign-up',
    component:RootThirdComponent
  },
  {
      path:'product',
      loadChildren: '../product/product.module#ProductModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
