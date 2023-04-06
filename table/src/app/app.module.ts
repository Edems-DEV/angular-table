import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputComponent } from './component/input/input.component';
import { ParentComponent } from './component/parent/parent.component';
import { TableComponent } from './component/table/table.component';

@NgModule({
  declarations: [AppComponent, InputComponent, ParentComponent, TableComponent],
  imports: [BrowserModule, NgbModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
