import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCalculatorComponent } from './result-calculator.component';

describe('ResultCalculatorComponent', () => {
  let component: ResultCalculatorComponent;
  let fixture: ComponentFixture<ResultCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
