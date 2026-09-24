import { Injectable } from '@angular/core';
import { ProductImage } from './product-image';

@Injectable({ providedIn: 'root' })
export class ProductService {
  productsImage: ProductImage[] = [
    {
      ProductId: 'p1',
      ProductName: 'Coca',
      Price: 100,
      Image: 'assets/bai13/coca.svg',
    },
    {
      ProductId: 'p2',
      ProductName: 'Pepsi',
      Price: 300,
      Image: 'assets/bai13/pepsi.svg',
    },
    {
      ProductId: 'p3',
      ProductName: 'Sting',
      Price: 200,
      Image: 'assets/bai13/sting.svg',
    },
  ];

  getProductsWithImages(): ProductImage[] {
    return this.productsImage;
  }

  getProductDetail(id: string): ProductImage | undefined {
    return this.productsImage.find((product) => product.ProductId === id);
  }
}
