import { Injectable } from '@angular/core';
import { Iprod } from '../model/product';
import { products } from '../const/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArr : Array<Iprod> = products

  constructor() { }

  fetchAllProducts() : Observable<Iprod[]>{

   return of(this.productsArr)

  }
  fetchUserById(id : number) : Observable<Iprod>{
    let product = this.productsArr.find(p => p.pid === id)!
    return of(product)
}

createProduct(prod : Iprod) : Observable<Iprod>{
  let newProd = {...prod, productId : Date.now()}
  this.productsArr.unshift(newProd)
  return of(newProd)

}
}