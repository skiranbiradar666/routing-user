import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm !: FormGroup

  constructor(private _productService : ProductsService,
    private _routes : Router
  ) { }

  ngOnInit(): void {
    this.createProdForm()
  }

  createProdForm(){

    this.productForm = new FormGroup({
      pname : new FormControl(null, [Validators.required]),
      imageUrl : new FormControl(null, [Validators.required]),
      description : new FormControl(null, [Validators.required]),
      category : new FormControl('Electronics', [Validators.required]),
      price : new FormControl(null, [Validators.required]),
      isActive : new FormControl('yes')
    })

  }

  onProductAdd(){

    if(this.productForm.valid){
      let prodObj = this.productForm.getRawValue()

      this._productService.createProduct(prodObj)
            .subscribe({
              next : data =>{
                console.log(data)
                this._routes.navigate(['products'])
              }
            })
    }

  }

}
