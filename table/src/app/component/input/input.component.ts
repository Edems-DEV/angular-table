import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../../_default/COMPLETE/country';
import { CountryService } from '../../_default/COMPLETE/country.service';
import {
  NgbdSortableHeader,
  SortEvent,
} from '../../_default/COMPLETE/sortable.directive';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor(public service: CountryService) {}
}
