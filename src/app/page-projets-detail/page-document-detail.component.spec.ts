import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDocumentsDetailComponent } from './page-document-detail.component';

describe('PageProjetsDetailComponent', () => {
  let component: PageDocumentsDetailComponent;
  let fixture: ComponentFixture<PageDocumentsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDocumentsDetailComponent]
    });
    fixture = TestBed.createComponent(PageDocumentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
