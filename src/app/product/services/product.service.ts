import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getUser(){
    return 'sabik';
  }

  getObservable():Observable<any>{
    debugger;
    return new Observable(observer=>{
      this.getObservableSecond().subscribe(res=>{
        setInterval(x=>{  observer.next(res); }, 3000);
        // observer.next(res);
      })
      // err=>observer.error(err),
      // ()=>observer.complete();
    });
  }

  getObservableSecond():Observable<any|string>{
    return new Observable(observer=>{
      // observer.error('ersr');
      observer.next('secondObservable');
    });
  }


}
