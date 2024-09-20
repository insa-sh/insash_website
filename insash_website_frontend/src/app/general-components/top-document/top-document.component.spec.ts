import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDocumentComponent } from './top-document.component';

describe('TopDocumentComponent', () => {
  let component: TopDocumentComponent;
  let fixture: ComponentFixture<TopDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopDocumentComponent]
    });
    fixture = TestBed.createComponent(TopDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
