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
  @Input() operation!: string;

  @Output() result = new EventEmitter<number>();

  ngOnChanges() {
    this.calculateResult();
  }

  calculateResult() {
    let result: number = 0;

    switch (this.operation) {
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
