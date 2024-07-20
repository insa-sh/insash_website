import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDocumentTileComponent } from './box-document-tile.component';

describe('BoxDocumentTileComponent', () => {
  let component: BoxDocumentTileComponent;
  let fixture: ComponentFixture<BoxDocumentTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxDocumentTileComponent]
    });
    fixture = TestBed.createComponent(BoxDocumentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
