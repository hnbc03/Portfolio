import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagChip } from './tag-chip';

describe('TagChip', () => {
  let component: TagChip;
  let fixture: ComponentFixture<TagChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagChip],
    }).compileComponents();

    fixture = TestBed.createComponent(TagChip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
