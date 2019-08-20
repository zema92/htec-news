import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesNewsPageComponent } from './categories-news-page.component';

describe('CategoriesNewsPageComponent', () => {
  let component: CategoriesNewsPageComponent;
  let fixture: ComponentFixture<CategoriesNewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesNewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
