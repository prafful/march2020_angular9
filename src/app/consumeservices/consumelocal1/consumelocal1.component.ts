import { Component, OnInit } from '@angular/core';
import { MathserviceService } from 'src/app/services/mathservice.service';

@Component({
  selector: 'app-consumelocal1',
  templateUrl: './consumelocal1.component.html',
  styleUrls: ['./consumelocal1.component.css']
})
export class Consumelocal1Component implements OnInit {

  constructor(private mathService: MathserviceService) { }

  ngOnInit(): void {
    console.log(this.mathService.message())
    console.log(this.mathService.localPI)
    console.log(this.mathService.scores);
    this.mathService.localPI = 22/7
    console.log(this.mathService.localPI)
    this.mathService.scores.push(51)
    console.log(this.mathService.scores);



}

}
