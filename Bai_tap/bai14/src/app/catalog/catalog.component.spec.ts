import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogService } from '../services/catalog.service';
import { CatalogComponent } from './catalog.component';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogComponent],
      providers: [CatalogService],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load categories on init', () => {
    expect(component.categories).toHaveLength(2);
  });

  it('should render all six products', () => {
    const rows = fixture.nativeElement.querySelectorAll('.product-table tbody tr');
    expect(rows).toHaveLength(6);
  });
});
