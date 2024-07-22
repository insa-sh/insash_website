import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMentionsLegalesComponent } from './page-mentions-legales.component';

describe('PageMentionsLegalesComponent', () => {
  let component: PageMentionsLegalesComponent;
  let fixture: ComponentFixture<PageMentionsLegalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMentionsLegalesComponent]
    });
    fixture = TestBed.createComponent(PageMentionsLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
