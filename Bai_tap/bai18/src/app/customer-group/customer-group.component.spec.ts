import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CustomerService } from '../services/customer.service';
import { CustomerGroupComponent } from './customer-group.component';

describe('CustomerGroupComponent', () => {
  let component: CustomerGroupComponent;
  let fixture: ComponentFixture<CustomerGroupComponent>;
  const customerTypes = [
    {
      CustomerTypeId: 1,
      CustomterTypeName: 'VIP',
      Customers: [
        { Id: 'Cus123', Name: 'Obama', Email: 'obama@gmail.com', Age: 67, Image: 'avatar.svg' },
      ],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerGroupComponent],
      providers: [
        {
          provide: CustomerService,
          useValue: { getCustomerTypes: vi.fn().mockReturnValue(of(customerTypes)) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load customer groups on init', () => {
    expect(component.customerTypes()).toEqual(customerTypes);
  });

  it('should render customers from nested groups', () => {
    const rows = fixture.nativeElement.querySelectorAll('.customer-table tbody tr');
    expect(rows).toHaveLength(1);
  });
});
