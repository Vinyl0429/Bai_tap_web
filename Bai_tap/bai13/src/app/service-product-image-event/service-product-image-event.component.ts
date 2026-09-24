import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductImage } from '../product-image';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  templateUrl: './service-product-image-event.component.html',
  styleUrl: './service-product-image-event.component.css',
})
export class ServiceProductImageEventComponent implements OnInit {
  products: ProductImage[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProductsWithImages();
  }

  viewDetail(product: ProductImage): void {
    this.router.navigate(['service-product-image-event', product.ProductId]);
  }
}
