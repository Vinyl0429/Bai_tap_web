import { Injectable } from '@angular/core';
import { Product } from '../classes/isProduct';

@Injectable({ providedIn: 'root' })
export class ProductService {
    products: Product[] = [
        { id: 1, name: 'iPhone 18 Pro Max', price: 999, image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQpT2m28xgFxFy55Ffn_KUViFAeZPPpA2FfaMhTc6FUsOTbgjX9wB6PGSZmsxJJOm2Lrqp0cVJC9aDTT3D_l63zvpF_quFBf1chLlH-RL-mTa1zUivE1Myt0xvFh7uVDP8JEhTNr9Y&usqp=CAc' },
        { id: 2, name: 'Samsung Galaxy Z Fold 7', price: 699, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nBscKEW8vakzgSSNW0jSqcamlxbQSkgdhGDFUYb4kw&s'},
        { id: 3, name: 'Macbook Pro M5', price: 399, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nBscKEW8vakzgSSNW0jSqcamlxbQSkgdhGDFUYb4kw&s' },
        { id: 4, name: 'iPhone Duo', price: -599, image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_LNjkLsEilJ3hgJkR9ZZhuZjrBsd9EhahHWWRW32O58FLoPGQnZkdArFM22cenzYu4HG6Vu6fn_XjjFWMlP25GUABiLY_ZLw0Xr0-kCjTm9dqdpy6q41oVXejv7taIA&usqp=CAc' },
        { id: 5, name: 'iPhone 17', price: 399, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nBscKEW8vakzgSSNW0jSqcamlxbQSkgdhGDFUYb4kw&s' }
        ];

    constructor() {
    }

    getProductList(){
        return this.products
    }

    filterProductList(minPrice: number, maxPrice: number): Product[] {
    return this.products.filter(
      p => p.price >= minPrice && p.price <= maxPrice
    );
  }
}
