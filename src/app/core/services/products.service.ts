import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts() {
    return (this.productList = this.firebase.list('products'));
  }

  addProduct(product: Product) {
    this.productList.push({
      title: product.title,
      description: product.description
    });
  }
  updateProduct(product: Product) {
    this.productList.update(product.$key, {
      title: product.title,
      description: product.description
    });
  }
  deleteProduct($key: string) {
    this.productList.remove($key);
  }
}
