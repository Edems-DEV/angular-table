import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputComponent } from './component/input/input.component';
import { ParentComponent } from './component/parent/parent.component';
import { TableComponent } from './component/table/table.component';
import { TableBasicComponent } from './_default/1.Basic/table-basic/table-basic.component';
import { TableSortableComponent } from './_default/2.Sortable/table-sortable/table-sortable.component';
import { TableFilteringComponent } from './_default/3.Search/table-filtering/table-filtering.component';
import { TablePeginationComponent } from './_default/4.Pegination/table-pegination/table-pegination.component';
import { TableCompleteComponent } from './_default/COMPLETE/table-complete/table-complete.component';
import { NgbdSortableHeader } from './_default/COMPLETE/sortable.directive';
import { DecimalPipe } from '@angular/common';
import { PeginantionComponent } from './component/peginantion/peginantion.component';
import { SortableDirective } from './service/sortable.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ParentComponent,
    TableComponent,
    TableBasicComponent,
    TableSortableComponent,
    //TableFilteringComponent,
    TablePeginationComponent,
    TableCompleteComponent,
    NgbdSortableHeader,
    PeginantionComponent,
    SortableDirective,
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TableFilteringComponent,
  ],
})
export class AppModule {}
