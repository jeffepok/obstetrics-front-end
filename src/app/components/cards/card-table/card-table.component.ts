import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
})
export class CardTableComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  @Input()
  data: string[] = [];
  @Input()
  heading!: string;
  private _color = 'light';
  public convertedData: string[] = [];

  constructor() {}

  public toInitialUpperCase(word: string): string{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  ngOnInit(): void {}
}
