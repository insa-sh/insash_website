import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectComponent } from './page-project.component';

describe('PageProjectComponent', () => {
  let component: PageProjectComponent;
  let fixture: ComponentFixture<PageProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageProjectComponent]
    });
    fixture = TestBed.createComponent(PageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});