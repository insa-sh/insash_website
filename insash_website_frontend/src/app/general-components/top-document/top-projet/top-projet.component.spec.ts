import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TopProjetComponent } from "./top-projet.component";

describe("TopProjetComponent", () => {
  let component: TopProjetComponent;
  let fixture: ComponentFixture<TopProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopProjetComponent],
    });
    fixture = TestBed.createComponent(TopProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
