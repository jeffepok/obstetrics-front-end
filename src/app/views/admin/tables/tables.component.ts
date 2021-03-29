import { Component, OnInit } from '@angular/core';
import {selectInputsPreviousPreg, textInputsPreviousPreg} from './previous-pregnancy-history';
import {textInputsCurrentPreg} from './current-pregnancy-history';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
})
export class TablesComponent implements OnInit {
  textInputsPreviousPreg = textInputsPreviousPreg;
  selectInputsPreviousPreg = selectInputsPreviousPreg;
  textInputsCurrentPreg = textInputsCurrentPreg;
  constructor() {}

  ngOnInit(): void {}
}
