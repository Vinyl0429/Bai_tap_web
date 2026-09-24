import { TestBed } from '@angular/core/testing';
import { CatalogService } from './catalog.service';

describe('CatalogService', () => {
  let service: CatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return two categories', () => {
    expect(service.getCategories()).toHaveLength(2);
  });

  it('should return three products for each category', () => {
    expect(service.getCategories().every((category) => category.Products.length === 3)).toBe(true);
  });
});
