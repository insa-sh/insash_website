import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMembresComponent } from './page-membres.component';

describe('PageMembresComponent', () => {
  let component: PageMembresComponent;
  let fixture: ComponentFixture<PageMembresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMembresComponent]
    });
    fixture = TestBed.createComponent(PageMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
