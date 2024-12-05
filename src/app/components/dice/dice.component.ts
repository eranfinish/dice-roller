import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'app-dice',
    templateUrl: './dice.component.html',
    styleUrls: ['./dice.component.less'],
   // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiceComponent {
//diceNumber: number = 0 ;
  constructor(){
    this.diceNumber = this.generateRandom();
}
  @Input() diceNumber: number =0 ;

  generateRandom(): number {
    return Math.floor(Math.random() * 6 + 1);
  }

    diceItems: number[] = [];

    isDotShow(index: number):string{
      var n = this.diceNumber;

      console.log(n);
      if(n==1){
        if(index == 5){
          return "";
        }
      }
      if(n==2){
        if(index==1 || index==9){
          return "";
        }

      }
      if(n==3){
         if(index==1 || index==5 || index==9){
          return  "";
        }
      }

      if(n==4){
        if(index == 5){
          return   "";
        }
      }
      if(n==5){
        if(index==1 || index==5 ||
        index==9 || index==3 || index==7){
          return   "";
        }

      }
      if(n==6){
         if(index==1 || index==3 || index==4 ||index==6
          || index==7 || index==9){
          return   "";
        }
      }
        return "hide-dot";
      }
}
