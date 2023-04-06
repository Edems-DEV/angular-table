import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeginantionComponent } from './peginantion.component';

describe('PeginantionComponent', () => {
  let component: PeginantionComponent;
  let fixture: ComponentFixture<PeginantionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeginantionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeginantionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
