import { Customer } from './customer';

export interface CustomerType {
  CustomerTypeId: number;
  CustomterTypeName: string;
  Customers: Customer[];
}
