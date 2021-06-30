import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';
import { take } from 'rxjs/operators';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  $categories;
  product = {} as Product;
  id;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
    this.$categories = this.categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) this.productService.getProduct(this.id)
                                .pipe(take(1))
                                .subscribe((p: any) => {
                                  this.product = p;
                                  console.log(p);
                                });
   }

  ngOnInit(): void {
  }

  save(product: any) {

    if (this.id) this.productService.updateProduct(this.id, product);
    else this.productService.create(product);
    
    this.router.navigate(['admin/manage-products']);

  }

  delete() {

    if (confirm('Are you sure you want to delete this product?')){
      if (this.id) this.productService.deleteProduct(this.id);

      this.router.navigate(['admin/manage-products']);
    }

  }
}
