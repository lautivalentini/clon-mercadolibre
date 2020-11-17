import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// product class
import { Product } from 'src/app/models/product';

//service
import { ProductsService } from '../../../core/services/products.service';

//toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-appliances',
  templateUrl: './home-appliances.component.html',
  styleUrls: ['./home-appliances.component.scss'],
})
export class HomeAppliancesComponent implements OnInit {
  showForm: boolean = false;

  showCross: boolean = false;

  productList: Product[];

  constructor(
    private productsService: ProductsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts();
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
  }

  onSubmit(productForm: NgForm) {
    if (productForm.value.$key == null) {
      this.productsService.addProduct(productForm.value);
      this.toastr.success('Operacion exitosa', 'Producto agregado correctamente');
      // this.productsService.addProduct(this.productsService.selectedProduct);
    } else {
      this.productsService.updateProduct(productForm.value);
      this.toastr.success('Operacion exitosa', 'Producto editado correctamente');
      // this.productsService.updateProduct(this.productsService.selectedProduct);
    }
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm) {
    if (productForm !== null) {
      productForm.reset();
      this.productsService.selectedProduct = new Product();
    }
  }

  onEdit(product: Product) {
    this.productsService.selectedProduct = product;
  }
  onDelete($key: string) {
    if (confirm('Estas seguro de eliminarlo')) {
      this.productsService.deleteProduct($key);
      this.toastr.success('Operacion Exitosa', 'Producto Eliminado correctamente');
    }
  }
}
