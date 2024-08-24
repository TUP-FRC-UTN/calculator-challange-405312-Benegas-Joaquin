import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result-calculator',
  standalone: true,
  imports: [],
  templateUrl: './result-calculator.component.html',
  styleUrl: './result-calculator.component.css',
})
export class ResultCalculatorComponent {
  @Input() firstNumber!: number;
  @Input() secondNumber!: number;

  @Output() result = new EventEmitter<number>();

  calculateResult(operation: string) {
    let result: number = 0;

    console.log({
      firstNumber: this.firstNumber,
      secondNumber: this.secondNumber,
      operation: operation
    });
    

    switch (operation) {
      case 'ADD':
        result = Number(this.firstNumber) + Number(this.secondNumber);
        break;
      case 'SUBTRACT':
        result = this.firstNumber - this.secondNumber;
        break;
      case 'MULTIPLY':
        result = this.firstNumber * this.secondNumber;
        break;
      case 'DIVIDE':
        result = this.firstNumber / this.secondNumber;
        break;
    }

    this.result.emit(result);
  }
}
