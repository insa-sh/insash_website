import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMembresDetailComponent } from './page-membres-detail.component';

describe('PageMembresDetailComponent', () => {
  let component: PageMembresDetailComponent;
  let fixture: ComponentFixture<PageMembresDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMembresDetailComponent]
    });
    fixture = TestBed.createComponent(PageMembresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
