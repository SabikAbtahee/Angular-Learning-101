import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl='http://5d3440a5ea45fb0014c26a6f.mockapi.io/tutorial101/users';

  constructor(private http:HttpClient) { }

  getUser(){
    return 'sabik';
  }
  callAPIService():Observable<any>{
    return new Observable(observer=>{
      this.http.get(this.baseurl).subscribe(response=>{
        observer.next(response);
      });
    })
    
  }

  f(){
    console.log('asdf');
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
