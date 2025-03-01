import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArticleComponent } from './page-article.component';

describe('PageArticleComponent', () => {
  let component: PageArticleComponent;
  let fixture: ComponentFixture<PageArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageArticleComponent]
    });
    fixture = TestBed.createComponent(PageArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
