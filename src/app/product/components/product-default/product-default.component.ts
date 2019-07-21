import { Component, OnInit } from '@angular/core';
import { Product, Category, Roles } from 'src/app/config/Interface/product.interface';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-default',
  templateUrl: './product-default.component.html',
  styleUrls: ['./product-default.component.scss']
})
export class ProductDefaultComponent implements OnInit {

  product:Product;
  role=Roles;
  arraya;
  array2=[1,2,3,4,5];
  x="sabik";
  a=`sabik is my name ${this.x}`;
  constructor(private prodService:ProductService,private http:HttpClient,private router:Router) { }

  ngOnInit() {
    // this.makeProduct();
    // this.makeRole();
			// this.router.navigate(['/sign-in']);

    this.callAPIComponent();
  }

  callAPIComponent(){
    this.prodService.callAPIService().subscribe(res=>{
      console.log(res);
      this.arraya=res;
    });
  }
  makeRole(){
    for(let i in this.role){
      // this.arraya.push(i);
      debugger;
      this.arraya=[...this.arraya,i];
    }
  }
  makeProduct(){
    debugger;
    let cat:Category={
      name:'milk',
      type:'liquid'
    }
    this.product={
      name:'Tea',
      category:cat,
      price:51
    }
    console.log(this.product);
  }

}
