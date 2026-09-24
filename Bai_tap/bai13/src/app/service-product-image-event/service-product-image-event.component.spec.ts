import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { ServiceProductImageEventComponent } from './service-product-image-event.component';

describe('ServiceProductImageEventComponent', () => {
  let component: ServiceProductImageEventComponent;
  let fixture: ComponentFixture<ServiceProductImageEventComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProductImageEventComponent],
      providers: [
        ProductService,
        {
          provide: Router,
          useValue: { navigate: vi.fn() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageEventComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on init', () => {
    expect(component.products).toHaveLength(3);
  });

  it('should navigate to the selected product detail', () => {
    component.viewDetail(component.products[0]);

    expect(router.navigate).toHaveBeenCalledWith(['service-product-image-event', 'p1']);
  });
});
