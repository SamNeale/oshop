import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Product } from 'shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product: any) {
    return this.db.list('products/products').push(product);
  }

  getAll() {
    return this.db
      .list('products/products')
      .snapshotChanges()
      .pipe(
        map((products) =>
          products.map((p) => (
            {
              key: p.payload.key,
              ...(p.payload.val() as {})
            }) as Product
            )
        )
      );
  }

  getProduct(productId: string) {
    return this.db
      .object('products/products/' + productId)
      .snapshotChanges()
      .pipe(map((p) => ({ key: p.payload.key, ...(p.payload.val() as any) })));
  }

  updateProduct(productId: string, product: any) {
    return this.db.object('products/products/' + productId).update(product);
  }

  deleteProduct(productId: string) {
    this.db.object('products/products/' + productId).remove();
  }
}
