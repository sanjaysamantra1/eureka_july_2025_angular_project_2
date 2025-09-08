import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eureka_july_2025_angular_project_2');

  add(a: number, b: number) {
    return a + b;
  }
  mul(a: number, b: number) {
    return a * b;
  }
  isEven(n: number) {
    return n % 2 == 0 ? 'even' : 'odd';
  }

  sumOfDigits(num: number) { // num = 125  (sum=8)
    let sum = 0;
    while (num != 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    return sum;
  }
}
