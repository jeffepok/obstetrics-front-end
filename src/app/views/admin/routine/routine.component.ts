import { Component, OnInit } from '@angular/core';
import {selectInputsHIV} from './hiv-hb-routine';
import {selectInputsHB} from './hiv-hb-routine';
import {subHeadings} from './antenatal-records';
@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {
  selectInputsHIV = selectInputsHIV;
  selectInputsHB = selectInputsHB;
  subHeadings = subHeadings;
  constructor() { }

  ngOnInit(): void {
  }

}
