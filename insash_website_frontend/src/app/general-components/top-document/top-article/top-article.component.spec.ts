import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArticleComponent } from './top-article.component';

describe('TopArticleComponent', () => {
  let component: TopArticleComponent;
  let fixture: ComponentFixture<TopArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopArticleComponent]
    });
    fixture = TestBed.createComponent(TopArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
