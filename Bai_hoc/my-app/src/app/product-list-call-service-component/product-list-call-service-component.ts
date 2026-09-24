import { Component } from '@angular/core';
import { Product } from '../classes/isProduct';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  styleUrl: './product-list-call-service-component.css',
  templateUrl: './product-list-call-service-component.html',
})

export class ProductListCallServiceComponent {
  products : Product[ ]=[ ]
  minPrice:number = 0
  maxPrice:number = 500
  constructor(private ps :ProductService) {
    // this.products=this.ps.getProductList() hạn chế viết như này -> dùng ngOnInit()
  }
  ngOnInit():void{
    this.products=this.ps.getProductList()
  }

  doFilter() {
    // this.products = this.ps.getProductList()
    //   .filter(p => p.price >= this.minPrice && p.price <= this.maxPrice)
    this.products = this.ps.filterProductList(this.minPrice, this.maxPrice)
  }
}
