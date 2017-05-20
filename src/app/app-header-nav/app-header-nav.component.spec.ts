import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderNavComponent } from './app-header-nav.component';

describe('AppHeaderNavComponent', () => {
  let component: AppHeaderNavComponent;
  let fixture: ComponentFixture<AppHeaderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
