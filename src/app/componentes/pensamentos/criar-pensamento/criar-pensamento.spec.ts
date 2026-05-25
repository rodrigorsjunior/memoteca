import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CriarPensamento } from './criar-pensamento';

describe('CriarPensamento', () => {
  let component: CriarPensamento;
  let fixture: ComponentFixture<CriarPensamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CriarPensamento],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarPensamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
