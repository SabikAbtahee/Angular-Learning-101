import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-product-view',
	templateUrl: './product-view.component.html',
	styleUrls: [ './product-view.component.scss' ]
})
export class ProductViewComponent implements OnInit {
	constructor(private prodService: ProductService) {}
	user;
	ngOnInit() {
		this.user = this.prodService.getUser();
    this.getobs();
    // this.getobs2();
	}

  getobs2(){
    this.prodService.getObservableSecond().subscribe(res=>{
      console.log(res);
    })
  }
	getobs() {
    debugger;
		this.prodService.getObservable().pipe(first()).subscribe((res) => {
      
			console.log(res);
		});
	}
}
