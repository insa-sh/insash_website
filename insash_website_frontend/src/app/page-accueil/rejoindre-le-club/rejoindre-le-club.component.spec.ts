import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoindreLeClubComponent } from './rejoindre-le-club.component';

describe('RejoindreLeClubComponent', () => {
  let component: RejoindreLeClubComponent;
  let fixture: ComponentFixture<RejoindreLeClubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejoindreLeClubComponent]
    });
    fixture = TestBed.createComponent(RejoindreLeClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
