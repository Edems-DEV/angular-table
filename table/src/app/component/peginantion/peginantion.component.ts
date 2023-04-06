import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../../_default/COMPLETE/country'; //itnerface
import { CountryService } from '../../_default/COMPLETE/country.service'; //data (amout of items)
@Component({
  selector: 'app-peginantion',
  templateUrl: './peginantion.component.html',
  styleUrls: ['./peginantion.component.scss'],
})
export class PeginantionComponent {
  countries$: Observable<Country[]>;
  total$: Observable<number>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }
}

//1.service interface (passess specific service by model)
//2.model interface (passess specific service by model)
