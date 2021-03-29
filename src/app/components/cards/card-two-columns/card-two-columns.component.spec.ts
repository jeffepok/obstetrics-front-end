import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTwoColumnsComponent } from './card-two-columns.component';

describe('CardSingleRowComponent', () => {
  let component: CardTwoColumnsComponent;
  let fixture: ComponentFixture<CardTwoColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTwoColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTwoColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
