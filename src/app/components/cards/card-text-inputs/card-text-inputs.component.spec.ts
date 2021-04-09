import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTextInputsComponent } from './card-text-inputs.component';

describe('CardTextInputsComponent', () => {
  let component: CardTextInputsComponent;
  let fixture: ComponentFixture<CardTextInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTextInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTextInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
