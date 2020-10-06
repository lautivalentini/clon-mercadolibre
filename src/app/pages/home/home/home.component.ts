import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products.service';

import { Product } from 'src/app/models/product';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ComputerService } from '../../../core/services/computer.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList: Product[];
  elementList: Product[];

  constructor(
    private productsService: ProductsService,
    private authService: AuthenticationService,
    private computerService: ComputerService) { }

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .snapshotChanges()
      .subscribe((item) => {
        this.productList = [];
        item.forEach((element) => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.productList.push(x as Product);
        });
      });
    this.computerService.getProducts();
    this.computerService
      .getProducts()
      .snapshotChanges()
      .subscribe((item) => {
        this.elementList = [];
        item.forEach((element) => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.elementList.push(x as Product);
        });
      });
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

}
