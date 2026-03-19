import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weatherr } from './weatherr';

describe('Weatherr', () => {
  let component: Weatherr;
  let fixture: ComponentFixture<Weatherr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weatherr],
    }).compileComponents();

    fixture = TestBed.createComponent(Weatherr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
