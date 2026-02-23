import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iprod } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId !: number
  productObj !: Iprod

  constructor(private _activeRoute : ActivatedRoute,
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {

    this.productId = +this._activeRoute.snapshot.params['productId']
    console.log(this.productId);
    this.fetchProduct()
    
  }

  fetchProduct(){
    if(this.productId){
      this._productService.fetchUserById(this.productId)
            .subscribe({
              next : data =>{
                console.log(data)
                this.productObj = data
              },
              error : err =>{
                console.log(err);
                
              }
            })

    }
  }

}
