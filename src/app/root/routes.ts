import { Routes } from "@angular/router";
import { RootSecondComponent } from './components/root-second/root-second.component';
import { RootThirdComponent } from './components/root-third/root-third.component';
import { AdminGuard } from './admin.guard';

export const routes: Routes = [
    
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
          loadChildren: '../product/product.module#ProductModule',
          canActivate:[AdminGuard],
          canActivateChild:[AdminGuard],

      }
      
];