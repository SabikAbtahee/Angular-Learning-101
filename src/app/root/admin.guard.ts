import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate,CanActivateChild {
	constructor(private router: Router) {}
	canActivate(): Observable<boolean> {
		return new Observable((observer) => {
      observer.next(false);
      // this.router
			this.router.navigate(['/sign-in']);

      
		});
  }
  canActivateChild():Observable<any>{
    return new Observable((observer) => {
      observer.next(false);
      // this.router
			this.router.navigate(['/sign-in']);

      
		});
  }
}
