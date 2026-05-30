import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostarPensameto } from './mostar-pensameto';

describe('MostarPensameto', () => {
  let component: MostarPensameto;
  let fixture: ComponentFixture<MostarPensameto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostarPensameto],
    }).compileComponents();

    fixture = TestBed.createComponent(MostarPensameto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
