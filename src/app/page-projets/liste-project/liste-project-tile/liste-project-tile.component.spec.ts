import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProjectTileComponent } from './liste-project-tile.component';

describe('ListeProjectTileComponent', () => {
  let component: ListeProjectTileComponent;
  let fixture: ComponentFixture<ListeProjectTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProjectTileComponent]
    });
    fixture = TestBed.createComponent(ListeProjectTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
