import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePolitiqueConfidentialiteComponent } from './page-politique-confidentialite.component';

describe('PagePolitiqueConfidentialiteComponent', () => {
  let component: PagePolitiqueConfidentialiteComponent;
  let fixture: ComponentFixture<PagePolitiqueConfidentialiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePolitiqueConfidentialiteComponent]
    });
    fixture = TestBed.createComponent(PagePolitiqueConfidentialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
