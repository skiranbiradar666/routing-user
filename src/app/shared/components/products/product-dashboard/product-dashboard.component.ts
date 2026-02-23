import { Component, OnInit } from '@angular/core';
import { Iprod } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  productsArr : Array<Iprod> = []

  constructor(private _prodService : ProductsService) { }

  ngOnInit(): void {

    this._prodService.fetchAllProducts()
          .subscribe({
            next : data =>{
              console.log(data)
              this.productsArr = data
            }
          })


  }

  trackByProduct(index : number, prod : Iprod){
    return prod.pid
  }

  



}
