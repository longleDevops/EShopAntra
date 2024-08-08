import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListFormComponent } from './product-list-form.component';

describe('ProductListFormComponent', () => {
  let component: ProductListFormComponent;
  let fixture: ComponentFixture<ProductListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
