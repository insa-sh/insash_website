import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTipsComponent } from './page-tips.component';

describe('PageTipsComponent', () => {
  let component: PageTipsComponent;
  let fixture: ComponentFixture<PageTipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTipsComponent]
    });
    fixture = TestBed.createComponent(PageTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
