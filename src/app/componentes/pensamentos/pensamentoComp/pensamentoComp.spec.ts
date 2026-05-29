import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentoComp } from './pensamentoComp';

describe('Pensamento', () => {
  let component: PensamentoComp;
  let fixture: ComponentFixture<PensamentoComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PensamentoComp],
    }).compileComponents();

    fixture = TestBed.createComponent(PensamentoComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
