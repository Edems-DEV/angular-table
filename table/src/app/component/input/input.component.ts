import { Component } from '@angular/core';

import { CountryService } from '../../_default/COMPLETE/country.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor(public service: CountryService) {}
}

//service interface (passess specific service by model)
