import { Component, OnInit } from '@angular/core';
import {selectInputsHIVHB} from './hiv-hb-routine';
import {subHeadings} from './antenatal-records';
@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {
  selectInputsHIVHB = selectInputsHIVHB;
  subHeadings = subHeadings;
  constructor() { }

  ngOnInit(): void {
  }

}
