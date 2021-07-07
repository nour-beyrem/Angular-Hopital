import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfComponent } from './update-inf.component';

describe('UpdateInfComponent', () => {
  let component: UpdateInfComponent;
  let fixture: ComponentFixture<UpdateInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
