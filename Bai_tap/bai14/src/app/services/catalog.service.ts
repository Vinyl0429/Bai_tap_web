import { Injectable } from '@angular/core';
import { Catalog } from '../classes/catalog';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  private readonly datas: Catalog[] = [
    {
      Cateid: 'cate1',
      CateName: 'nuoc ngot',
      Products: [
        { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'assets/bai14/coca.svg' },
        { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'assets/bai14/pepsi.svg' },
        { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'assets/bai14/sting.svg' },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Bia',
      Products: [
        {
          ProductId: 'p4',
          ProductName: 'Heleiken',
          Price: 500,
          Image: 'assets/bai14/heineken.svg',
        },
        { ProductId: 'p5', ProductName: '333', Price: 400, Image: 'assets/bai14/333.svg' },
        { ProductId: 'p6', ProductName: 'Sai Gon', Price: 600, Image: 'assets/bai14/saigon.svg' },
      ],
    },
  ];

  getCategories(): Catalog[] {
    return this.datas;
  }
}
