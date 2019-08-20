import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNewsDetailsComponent } from './top-news-details.component';

describe('TopNewsDetailsComponent', () => {
  let component: TopNewsDetailsComponent;
  let fixture: ComponentFixture<TopNewsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNewsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
