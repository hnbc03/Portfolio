import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instaweb } from './instaweb';

describe('Instaweb', () => {
  let component: Instaweb;
  let fixture: ComponentFixture<Instaweb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Instaweb],
    }).compileComponents();

    fixture = TestBed.createComponent(Instaweb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
