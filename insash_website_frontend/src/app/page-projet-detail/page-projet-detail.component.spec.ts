import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjetDetailComponent } from './page-projet-detail.component';

describe('PageProjetDetailComponent', () => {
  let component: PageProjetDetailComponent;
  let fixture: ComponentFixture<PageProjetDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageProjetDetailComponent]
    });
    fixture = TestBed.createComponent(PageProjetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
