import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../../_default/COMPLETE/country';
import { CountryService } from '../../_default/COMPLETE/country.service';
import { NgbdSortableHeader } from '../../_default/COMPLETE/sortable.directive';
@Component({
  selector: 'app-peginantion',
  templateUrl: './peginantion.component.html',
  styleUrls: ['./peginantion.component.scss'],
})
export class PeginantionComponent {
  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }
}
