import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreBureauComponent } from './membre-bureau.component';

describe('MembreBureauComponent', () => {
  let component: MembreBureauComponent;
  let fixture: ComponentFixture<MembreBureauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembreBureauComponent]
    });
    fixture = TestBed.createComponent(MembreBureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
