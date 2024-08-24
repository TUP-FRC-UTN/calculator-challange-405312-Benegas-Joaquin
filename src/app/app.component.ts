import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorInputsComponent } from './calculator-inputs/calculator-inputs.component';
import { ResultCalculatorComponent } from './result-calculator/result-calculator.component';
import { ResultDisplayComponent } from './result-display/result-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CalculatorInputsComponent,
    ResultCalculatorComponent,
    ResultDisplayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clase-02';

  firstNumber!: number;
  secondNumber!: number;
  operation!: string;
  result!: number;

  onFirstNumberReceived(value: number) {
    this.firstNumber = value;
  }

  onSecondNumberReceived(value: number) {
    this.secondNumber = value;
  }

  onOperationReceived(operation: string) {
    this.operation = operation;
  }

  onResultReceived(result: number) {
    this.result = result;
  }
}
