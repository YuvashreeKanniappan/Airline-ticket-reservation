import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpassengersComponent } from './addpassengers.component';

describe('AddpassengersComponent', () => {
  let component: AddpassengersComponent;
  let fixture: ComponentFixture<AddpassengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpassengersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
