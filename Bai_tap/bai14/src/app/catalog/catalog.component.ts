import { Component, OnInit } from '@angular/core';
import { Catalog } from '../classes/catalog';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-catalog',
  standalone: false,
  styleUrl: './catalog.component.css',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  categories: Catalog[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}
