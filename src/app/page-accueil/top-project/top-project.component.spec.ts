import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProjectComponent } from './top-project.component';

describe('TopProjectComponent', () => {
  let component: TopProjectComponent;
  let fixture: ComponentFixture<TopProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopProjectComponent]
    });
    fixture = TestBed.createComponent(TopProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
