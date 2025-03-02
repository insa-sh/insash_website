import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProjetTileComponent } from './liste-projet-tile.component';

describe('ListeProjetTileComponent', () => {
  let component: ListeProjetTileComponent;
  let fixture: ComponentFixture<ListeProjetTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProjetTileComponent]
    });
    fixture = TestBed.createComponent(ListeProjetTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
