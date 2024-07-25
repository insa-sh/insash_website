import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailHeaderComponent } from './project-detail-header.component';

describe('ProjectDetailHeaderComponent', () => {
  let component: ProjectDetailHeaderComponent;
  let fixture: ComponentFixture<ProjectDetailHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailHeaderComponent]
    });
    fixture = TestBed.createComponent(ProjectDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
