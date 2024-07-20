import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDocumentTileComponent } from './liste-document-tile.component';

describe('ListeDocumentTileComponent', () => {
  let component: ListeDocumentTileComponent;
  let fixture: ComponentFixture<ListeDocumentTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDocumentTileComponent]
    });
    fixture = TestBed.createComponent(ListeDocumentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
