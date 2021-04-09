import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-two-columns',
  templateUrl: './card-two-columns.component.html',
  styleUrls: ['./card-two-columns.component.css']
})
export class CardTwoColumnsComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }

  private _color = 'light';
  @Input()
  heading!: string;
  @Input() subHeadings: any;
  @Input() textInputs: any;
  @Input() radioInputs: any;
  @Input() selectInputs: any;
  @Input()
  date!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
