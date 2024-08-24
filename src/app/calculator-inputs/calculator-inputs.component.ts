import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator-inputs.component.html',
  styleUrl: './calculator-inputs.component.css',
})
export class CalculatorInputsComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;

  @Output() firstNumberEvent = new EventEmitter<number>();
  @Output() secondNumberEvent = new EventEmitter<number>();
  @Output() operationEvent = new EventEmitter<string>();

  emitValues(operation: string) {
    this.firstNumberEvent.emit(this.firstNumber);
    this.secondNumberEvent.emit(this.secondNumber);
    this.operationEvent.emit(operation);
  }
}
