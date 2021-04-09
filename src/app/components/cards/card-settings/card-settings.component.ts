import { Component, OnInit } from '@angular/core';
import { countries } from './countries';
import {educationalLevels} from './educational-levels';
@Component({
  selector: 'app-card-settings',
  templateUrl: './card-settings.component.html',
})
export class CardSettingsComponent implements OnInit {
  countries = countries;
  educationalLevels = educationalLevels;
  constructor() {}

  ngOnInit(): void {}
}
