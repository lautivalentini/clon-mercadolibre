import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


// product class
import { Product } from 'src/app/models/product';

//service
import { ComputerService } from '../../../core/services/computer.service';

//toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-computing',
  templateUrl: './computing.component.html',
  styleUrls: ['./computing.component.scss']
})
export class ComputingComponent implements OnInit {

  showForm: boolean = false;

  showCross: boolean = false;

  elementList: Product[];

  constructor(private computerService: ComputerService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
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

  onSubmit(productForm: NgForm) {
    if (productForm.value.$key == null) {
      this.computerService.addProduct(productForm.value);
      this.toastr.success('Operacion exitosa', 'Producto agregado correctamente');
    } else {
      this.computerService.updateProduct(productForm.value);
      this.toastr.success('Operacion exitosa', 'Producto editado correctamente');
    }
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm) {
    if (productForm !== null) {
      productForm.reset();
      this.computerService.selectedElement = new Product();
    }
  }

  onEdit(product: Product) {
    this.computerService.selectedElement = product;
  }

  onDelete($key: string) {
    if (confirm('Estas seguro de eliminarlo')) {
      this.computerService.deleteProduct($key);
      this.toastr.success('Operacion Exitosa', 'Producto Eliminado correctamente');
    }
  }

}
