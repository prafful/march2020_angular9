import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipes',
  templateUrl: './inbuiltpipes.component.html',
  styleUrls: ['./inbuiltpipes.component.css']
})
export class InbuiltpipesComponent implements OnInit {

  mydate = new Date()

  friend: string = 'praFFul dAga'

  salary:number = 88

  constructor() { }

  ngOnInit(): void {
  }

}
