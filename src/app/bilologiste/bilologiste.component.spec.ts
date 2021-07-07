import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilologisteComponent } from './bilologiste.component';

describe('BilologisteComponent', () => {
  let component: BilologisteComponent;
  let fixture: ComponentFixture<BilologisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilologisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilologisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
