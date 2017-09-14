import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteInputComponent } from './quote-input.component';

describe('QuoteInputComponent', () => {
  let component: QuoteInputComponent;
  let fixture: ComponentFixture<QuoteInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
