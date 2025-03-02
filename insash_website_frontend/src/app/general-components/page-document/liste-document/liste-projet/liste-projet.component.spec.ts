import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProjetComponent } from './liste-projet.component';

describe('ListeProjetComponent', () => {
  let component: ListeProjetComponent;
  let fixture: ComponentFixture<ListeProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProjetComponent]
    });
    fixture = TestBed.createComponent(ListeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
