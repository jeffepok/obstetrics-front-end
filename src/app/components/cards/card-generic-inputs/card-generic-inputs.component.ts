import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-generic-inputs',
  templateUrl: './card-generic-inputs.component.html',
  styleUrls: ['./card-generic-inputs.component.css']
})
export class CardGenericInputsComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }

  private _color = 'light';
  @Input() heading: string;
  @Input() textInputs;
  @Input() radioInputs;
  @Input() selectInputs;
  @Input() date: boolean;
  constructor() { }

  public toInitialUpperCase(word: string): string{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }


  ngOnInit(): void {
  }

}
