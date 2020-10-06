import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  elementList: AngularFireList<any>;
  selectedElement: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts() {
    return (this.elementList = this.firebase.list('computers'));
  }

  addProduct(product: Product) {
    this.elementList.push({
      title: product.title,
      description: product.description
      // price: product.price,
    });
  }

  updateProduct(product: Product) {
    this.elementList.update(product.$key, {
      title: product.title,
      description: product.description
      // price: product.price,
    });
  }

  deleteProduct($key: string) {
    this.elementList.remove($key);
  }
}
