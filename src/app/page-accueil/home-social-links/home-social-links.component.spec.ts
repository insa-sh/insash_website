import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSocialLinksComponent } from './home-social-links.component';

describe('HomeSocialLinksComponent', () => {
  let component: HomeSocialLinksComponent;
  let fixture: ComponentFixture<HomeSocialLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSocialLinksComponent]
    });
    fixture = TestBed.createComponent(HomeSocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
