import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPatientComponent } from './list-of-patient.component';

describe('ListOfPatientComponent', () => {
  let component: ListOfPatientComponent;
  let fixture: ComponentFixture<ListOfPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
