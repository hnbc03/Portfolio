import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yumdaily } from './yumdaily';

describe('Yumdaily', () => {
  let component: Yumdaily;
  let fixture: ComponentFixture<Yumdaily>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yumdaily],
    }).compileComponents();

    fixture = TestBed.createComponent(Yumdaily);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
