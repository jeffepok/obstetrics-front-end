import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-inputs',
  templateUrl: './card-inputs.component.html',
  styleUrls: ['./card-inputs.component.css']
})
export class CardInputsComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }

  private _color = 'light';
  constructor() { }

  public toInitialUpperCase(word: string): string{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  ngOnInit(): void {
  }

}
