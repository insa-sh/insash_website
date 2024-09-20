import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCheatsheetComponent } from './page-cheatsheet.component';

describe('PageCheatsheetComponent', () => {
  let component: PageCheatsheetComponent;
  let fixture: ComponentFixture<PageCheatsheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCheatsheetComponent]
    });
    fixture = TestBed.createComponent(PageCheatsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
