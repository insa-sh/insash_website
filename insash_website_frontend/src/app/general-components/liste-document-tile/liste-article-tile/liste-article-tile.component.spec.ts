import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ListeArticleTileComponent } from "./liste-article-tile.component";

describe("ListeArticleTileComponent", () => {
  let component: ListeArticleTileComponent;
  let fixture: ComponentFixture<ListeArticleTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeArticleTileComponent],
    });
    fixture = TestBed.createComponent(ListeArticleTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
