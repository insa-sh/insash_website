import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMembreComponent } from './box-membre.component';

describe('BoxMembreComponent', () => {
  let component: BoxMembreComponent;
  let fixture: ComponentFixture<BoxMembreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxMembreComponent]
    });
    fixture = TestBed.createComponent(BoxMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
