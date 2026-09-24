import { Product } from './product';

export interface Catalog {
  Cateid: string;
  CateName: string;
  Products: Product[];
}
