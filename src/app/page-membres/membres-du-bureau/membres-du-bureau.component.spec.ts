import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresDuBureauComponent } from './membres-du-bureau.component';

describe('MembresDuBureauComponent', () => {
  let component: MembresDuBureauComponent;
  let fixture: ComponentFixture<MembresDuBureauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembresDuBureauComponent]
    });
    fixture = TestBed.createComponent(MembresDuBureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
