import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CustomerService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load customer groups from the JSON file', () => {
    const response = [{ CustomerTypeId: 1, CustomterTypeName: 'VIP', Customers: [] }];

    service.getCustomerTypes().subscribe((data) => expect(data).toEqual(response));

    const request = httpTesting.expectOne('assets/data/customers.json');
    expect(request.request.method).toBe('GET');
    request.flush(response);
  });

  it('should retry three times and return an error', () => {
    let message = '';
    service.getCustomerTypes().subscribe({ error: (error: Error) => (message = error.message) });

    for (let attempt = 0; attempt < 4; attempt += 1) {
      httpTesting.expectOne('assets/data/customers.json').flush('Not found', {
        status: 404,
        statusText: 'Not Found',
      });
    }

    expect(message).toContain('404');
  });
});
