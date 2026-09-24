import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all products with images', () => {
    expect(service.getProductsWithImages()).toHaveLength(3);
  });

  it('should find a product by id', () => {
    expect(service.getProductDetail('p2')?.ProductName).toBe('Pepsi');
  });

  it('should return undefined for an unknown id', () => {
    expect(service.getProductDetail('unknown')).toBeUndefined();
  });
});
