import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjetsDetailComponent } from './page-projets-detail.component';

describe('PageProjetsDetailComponent', () => {
  let component: PageProjetsDetailComponent;
  let fixture: ComponentFixture<PageProjetsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageProjetsDetailComponent]
    });
    fixture = TestBed.createComponent(PageProjetsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
