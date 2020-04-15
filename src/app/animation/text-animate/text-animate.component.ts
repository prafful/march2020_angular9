import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";



@Component({
  selector: 'app-text-animate',
  templateUrl: './text-animate.component.html',
  styleUrls: ['./text-animate.component.css'],
  animations:[
    trigger('textAnimation', [
      state("start", style({
        color:'red',
        transform: 'scale(1)',
        letterSpacing:'4px'
      })), state("end", style({
        color:'yellow',
        transform: 'scale(4)',
        letterSpacing:'-2px'
      })), transition("start <-> end", animate("500ms ease-out"))
    ])
  ]
})
export class TextAnimateComponent implements OnInit {

  currentState:any = 'start'


  constructor() { }

  ngOnInit(): void {
  }

  animateText =()=>{
    this.currentState = this.currentState === 'start' ? 'end':'start'
  }


}
