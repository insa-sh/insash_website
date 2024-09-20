import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresActifsComponent } from './membres-actifs.component';

describe('MembresActifsComponent', () => {
  let component: MembresActifsComponent;
  let fixture: ComponentFixture<MembresActifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembresActifsComponent]
    });
    fixture = TestBed.createComponent(MembresActifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
