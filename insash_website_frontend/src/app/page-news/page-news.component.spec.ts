import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewsComponent } from './page-news.component';

describe('PageNewsComponent', () => {
  let component: PageNewsComponent;
  let fixture: ComponentFixture<PageNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNewsComponent]
    });
    fixture = TestBed.createComponent(PageNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
