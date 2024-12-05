import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
numberOfDice: number=0;
diceItems: number[] = [];

generateRandom(): number {
  return Math.floor(Math.random() * 6 + 1);
}

 updateArray(): void {
    this.diceItems = Array.from({ length: this.numberOfDice }, (_, i) => i + 1);
    for(var i=0 ;i<this.numberOfDice;i++){
      this.diceItems[i] = this.generateRandom();
    }
  }00
}
