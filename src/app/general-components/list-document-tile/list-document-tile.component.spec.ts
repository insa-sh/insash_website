import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocumentTileComponent } from './list-document-tile.component';

describe('ListeDocumentTileComponent', () => {
  let component: ListDocumentTileComponent;
  let fixture: ComponentFixture<ListDocumentTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDocumentTileComponent]
    });
    fixture = TestBed.createComponent(ListDocumentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
