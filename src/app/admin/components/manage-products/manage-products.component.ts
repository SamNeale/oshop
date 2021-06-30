import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  filterdProducts: any[];

  subscription: Subscription;
  
  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll().subscribe(products => this.filterdProducts = this.products = products);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  filter(searchTerm: string){
    console.log(searchTerm)

    this.filterdProducts = (searchTerm) ?
      this.products.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase())) : this.products;


  }

}
