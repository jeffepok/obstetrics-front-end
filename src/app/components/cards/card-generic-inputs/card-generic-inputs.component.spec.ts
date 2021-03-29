import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGenericInputsComponent } from './card-generic-inputs.component';

describe('CardGenericInputsComponent', () => {
  let component: CardGenericInputsComponent;
  let fixture: ComponentFixture<CardGenericInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGenericInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGenericInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
