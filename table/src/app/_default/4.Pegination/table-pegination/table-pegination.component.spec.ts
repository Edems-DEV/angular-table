import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePeginationComponent } from './table-pegination.component';

describe('TablePeginationComponent', () => {
  let component: TablePeginationComponent;
  let fixture: ComponentFixture<TablePeginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePeginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePeginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
