import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTileComponent } from './project-tile.component';

describe('ProjectTileComponent', () => {
  let component: ProjectTileComponent;
  let fixture: ComponentFixture<ProjectTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTileComponent]
    });
    fixture = TestBed.createComponent(ProjectTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
