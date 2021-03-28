import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNumberInputsComponent } from './card-number-inputs.component';

describe('CardInputsComponent', () => {
  let component: CardNumberInputsComponent;
  let fixture: ComponentFixture<CardNumberInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNumberInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNumberInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
