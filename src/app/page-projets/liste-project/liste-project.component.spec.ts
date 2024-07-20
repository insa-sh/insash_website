import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProjectComponent } from './liste-project.component';

describe('ListeProjectComponent', () => {
  let component: ListeProjectComponent;
  let fixture: ComponentFixture<ListeProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProjectComponent]
    });
    fixture = TestBed.createComponent(ListeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
