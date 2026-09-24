import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';

import { ProductService } from '../product.service';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail.component';

describe('ServiceProductImageEventDetailComponent', () => {
  let component: ServiceProductImageEventDetailComponent;
  let fixture: ComponentFixture<ServiceProductImageEventDetailComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProductImageEventDetailComponent],
      providers: [
        ProductService,
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ id: 'p2' })) },
        },
        {
          provide: Router,
          useValue: { navigate: vi.fn() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageEventDetailComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the product from the route id', () => {
    expect(component.selectedProduct?.ProductId).toBe('p2');
  });

  it('should navigate back to the product list', () => {
    component.goBack();

    expect(router.navigate).toHaveBeenCalledWith(['service-product-image-event']);
  });
});
