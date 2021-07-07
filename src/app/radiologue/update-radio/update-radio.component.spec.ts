import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRadioComponent } from './update-radio.component';

describe('UpdateRadioComponent', () => {
  let component: UpdateRadioComponent;
  let fixture: ComponentFixture<UpdateRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
