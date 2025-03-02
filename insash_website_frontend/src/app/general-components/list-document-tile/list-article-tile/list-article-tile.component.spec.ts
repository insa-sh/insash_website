import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticleTileComponent } from './list-article-tile.component';

describe('ListArticleTileComponent', () => {
  let component: ListArticleTileComponent;
  let fixture: ComponentFixture<ListArticleTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListArticleTileComponent]
    });
    fixture = TestBed.createComponent(ListArticleTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
