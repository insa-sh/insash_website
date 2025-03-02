import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjetDetailHeaderComponent } from "./projet-detail-header.component";

describe("ProjetDetailHeaderComponent", () => {
  let component: ProjetDetailHeaderComponent;
  let fixture: ComponentFixture<ProjetDetailHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetDetailHeaderComponent],
    });
    fixture = TestBed.createComponent(ProjetDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
