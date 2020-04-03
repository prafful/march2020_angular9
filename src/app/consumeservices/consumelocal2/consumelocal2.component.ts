import { Component, OnInit } from '@angular/core';
import { MathserviceService } from 'src/app/services/mathservice.service';

@Component({
  selector: 'app-consumelocal2',
  templateUrl: './consumelocal2.component.html',
  styleUrls: ['./consumelocal2.component.css']
})
export class Consumelocal2Component implements OnInit {

  constructor(private ms: MathserviceService) { }

  ngOnInit(): void {
    console.log(this.ms.scores)
    this.ms.scores.push(61)
    console.log(this.ms.scores);
  }

}
