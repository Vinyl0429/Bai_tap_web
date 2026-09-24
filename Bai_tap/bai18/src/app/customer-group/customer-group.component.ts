import { Component, OnInit, signal } from '@angular/core';
import { CustomerType } from '../classes/customer-type';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-group',
  standalone: false,
  templateUrl: './customer-group.component.html',
  styleUrl: './customer-group.component.css',
})
export class CustomerGroupComponent implements OnInit {
  customerTypes = signal<CustomerType[]>([]);
  errMessage = signal('');

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomerTypes().subscribe({
      next: (data) => {
        this.customerTypes.set(data);
        this.errMessage.set('');
      },
      error: (error: Error) => {
        this.errMessage.set(error.message);
      },
    });
  }
}
